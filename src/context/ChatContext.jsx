import React, { createContext, useContext, useState, useEffect } from "react";
import { sendMessageToGroq } from "../services/groq";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("omni_conversations");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("omni_conversations", JSON.stringify(conversations));
  }, [conversations]);

  // Sync messages only when activeChatId changes
  useEffect(() => {
    if (activeChatId) {
      const activeChat = conversations.find((c) => c.id === activeChatId);
      if (activeChat) {
        setMessages(activeChat.messages);
      }
    }
  }, [activeChatId, conversations]);

  const startNewChat = () => {
    setActiveChatId(null);
    setMessages([]);
  };

  const selectChat = (id) => {
    setActiveChatId(id);
  };

  const deleteChat = (id) => {
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (activeChatId === id) {
      setActiveChatId(null);
    }
  };

  const sendMessage = async (text, images = []) => {
    if (!text && images.length === 0) return;

    setIsLoading(true);

    const newUserMessage = {
      role: "user",
      content: images.length > 0 
        ? [{ type: "text", text }, ...images.map(img => ({ type: "image_url", image_url: { url: img } }))]
        : text,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      // Prepare message history for Groq
      const history = updatedMessages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const aiResponse = await sendMessageToGroq(history);
      
      const newAiMessage = {
        ...aiResponse,
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [...updatedMessages, newAiMessage];
      setMessages(finalMessages);

      // Update or Create Conversation in History
      if (activeChatId) {
        setConversations((prev) =>
          prev.map((c) =>
            c.id === activeChatId ? { ...c, messages: finalMessages, lastUpdated: new Date().toISOString() } : c
          )
        );
      } else {
        const newChatId = "chat_" + Date.now();
        const newChat = {
          id: newChatId,
          title: text.substring(0, 30) || "New Conversation",
          messages: finalMessages,
          createdAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
        };
        setConversations((prev) => [newChat, ...prev]);
        setActiveChatId(newChatId);
      }
    } catch (error) {
      console.error("AI Error:", error);
      alert(`AI Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeChatId,
        messages,
        isLoading,
        startNewChat,
        selectChat,
        deleteChat,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
