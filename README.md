# Omni-Agent

Omni-Agent is a high-performance, minimalist, and state-of-the-art AI Copilot application. Built with **React**, **Vite**, and **Tailwind CSS v4**, it provides a seamless and responsive conversational experience powered by the **Groq API**.

## 🛠 Features

| Feature | Description |
| :--- | :--- |
| **🚀 Fast AI Responses** | Powered by Groq's high-speed Llama models for near-instant interaction. |
| **🎨 Premium UI** | Minimalist, zinc-based design with smooth transitions and glass-morphism. |
| **🌓 Dynamic Themes** | Full support for Dark and Light modes with persistent state management. |
| **📁 Contextual Chats** | Local history storage for persistent conversations and easy navigation. |
| **🖼 Image Support** | Ready for vision-capable models with easy image and file uploads. |

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 8.0.0 or higher.
- **Groq API Key**: Obtainable from [console.groq.com](https://console.groq.com/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anwaroxxx/Omni-Agent.git
   cd Omni-Agent
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your Groq API key:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🎮 How to Use

1. **Start a Conversation**: Click the **+ New Chat** button in the sidebar to begin a fresh session.
2. **Chat with AI**: Type your message in the command bar at the bottom and hit **Enter** or click the send icon.
3. **Toggle Theme**: Click the **Brightness/Contrast** icon in the far-left navigation bar to switch between Light and Dark modes.
4. **Attach Files**: Use the **Attach** or **Image** icons in the input area to upload files for context-aware conversations.
5. **Manage History**: Search and manage your previous chats directly from the left sidebar.

## 🪚 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4, Lucide/React Icons
- **AI Service**: Groq Cloud API
- **State Management**: React Context API

---
*Built with precision and high-performance in mind.*
