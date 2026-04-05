const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const sendMessageToGroq = async (messages, model = "llama-3.3-70b-versatile") => {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch from Groq");
    }

    const data = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.error("Groq API Error:", error);
    throw error;
  }
};
