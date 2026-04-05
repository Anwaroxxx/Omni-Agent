import LOGO from "../../../assets/LOGO.jpeg";
import { IoMdSearch } from "react-icons/io";
import { TiAttachment } from "react-icons/ti";
import { IoImageOutline } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { useChat } from "../../../context/ChatContext";

function MainPage() {
  const { messages, sendMessage, isLoading, activeChatId } = useChat();
  const [input, setInput] = useState("");
  const [tempImages, setTempImages] = useState([]);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input && tempImages.length === 0) return;
    const currentInput = input;
    const currentImages = tempImages;
    setInput("");
    setTempImages([]);
    await sendMessage(currentInput, currentImages);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Basic file attachment logic - for now we just show a message or logic
      setInput(prev => prev + ` [Attached: ${file.name}] `);
    }
  };

  return (
    <section className="mainPage relative flex flex-col h-[calc(100vh-64px)] px-6 overflow-hidden bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      
      {/* Welcome or Messages */}
      <div className="flex-1 overflow-y-auto pt-10 pb-20 space-y-8 scrollbar-hide">
        {!activeChatId && messages.length === 0 ? (
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center p-1 border-2 border-orange-200 dark:border-orange-900">
              <img src={LOGO} alt="logo" className="w-full h-full object-cover rounded-full" />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Omni AI Copilot
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
                Discover smarter conversations, automated insights, and limitless creativity.
              </p>
              <p className="text-gray-400 dark:text-zinc-600 text-sm italic">
                Ask me anything, attach files, or upload images.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto w-full space-y-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.role === "user"
                      ? "bg-orange-500 text-white rounded-br-none shadow-orange-500/10"
                      : "bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-gray-100 rounded-bl-none"
                  }`}
                >
                  {Array.isArray(msg.content) ? (
                    <div className="space-y-2">
                      {msg.content.map((c, i) => (
                        <div key={i}>
                          {c.type === "text" && <p className="text-sm leading-relaxed">{c.text}</p>}
                          {c.type === "image_url" && (
                            <img src={c.image_url.url} alt="upload" className="max-w-full rounded-lg mt-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  )}
                  <span className={`text-[10px] mt-1 block opacity-70 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl px-4 py-3 rounded-bl-none shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6">
        <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-2xl shadow-xl p-3 flex flex-col gap-2 ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300">
          
          {tempImages.length > 0 && (
            <div className="flex gap-2 p-1 overflow-x-auto">
              {tempImages.map((img, i) => (
                <div key={i} className="relative group">
                  <img src={img} className="w-16 h-16 object-cover rounded-lg border border-gray-100 dark:border-zinc-700" />
                  <button 
                   onClick={() => setTempImages(prev => prev.filter((_, idx) => idx !== i))}
                   className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition">×</button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <IoMdSearch size={22} className="text-gray-400" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Message OmniAI..."
              className="flex-1 outline-none text-base text-gray-700 dark:text-gray-200 placeholder-gray-400 bg-transparent py-2"
            />
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-700/50 pt-2">
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <label 
                className="cursor-pointer flex items-center gap-1.5 hover:text-orange-500 transition text-sm"
                onClick={() => fileInputRef.current?.click()}
              >
                <TiAttachment size={20} />
                <span className="hidden sm:inline">Attach</span>
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileUpload} 
                />
              </label>
              
              <label className="cursor-pointer flex items-center gap-1.5 hover:text-orange-500 transition text-sm">
                <IoImageOutline size={20} />
                <span className="hidden sm:inline">Image</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>

            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
            >
              <BiSolidSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
