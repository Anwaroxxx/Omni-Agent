# Omni-Agent

Omni-Agent is a high-performance, minimalist, and state-of-the-art AI Copilot application. Built for efficiency and elegant design, it provides a seamless conversational experience powered by advanced Llama models.

![Omni-Agent Logic](https://img.shields.io/badge/Omni--Agent-AI--Powered-orange?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Core Capabilities

| Capability | Description |
| :--- | :--- |
| **High-Performance AI** | Leverages Groq's Llama models for sub-second inference speeds. |
| **State-of-the-Art Interface** | Minimalist zinc-based design with professional glass-morphism effects. |
| **Intelligent Theme Engine** | Native support for class-based dark and light mode synchronization. |
| **Persistent Conversations** | Localized chat history management for uninterrupted workflows. |
| **Multimodal Readiness** | Engineered to support vision models with integrated asset upload pipelines. |

## Getting Started

### Prerequisites

- **Node.js**: LTS Version (18.x or 20.x)
- **Groq API Key**: Accessible via the [Groq Cloud Console](https://console.groq.com/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Anwaroxxx/Omni-Agent.git
   cd Omni-Agent
   ```

2. **Deploy Dependencies**:
   ```bash
   npm install
   ```

3. **Initialize Environment**:
   Create a `.env` file in the root directory:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Launch Development Environment**:
   ```bash
   npm run dev
   ```

## Usage Protocol

1. **Initialization**: Select the **New Chat** button found in the primary navigation sidebar.
2. **Interaction**: Input queries into the central command bar. Execute via **Enter** or the send trigger.
3. **Aesthetic Toggle**: Utilize the **Brightness/Contrast** control in the utility sidebar to modulate the visual theme.
4. **Data Injection**: Access the **Attach** or **Image** triggers to feed contextual file data to the AI agent.
5. **Session Management**: Review and synthesize previous interactions via the localized history interface.

## Technical Architecture

- **Engine**: React 19 + Vite
- **Styling Spectrum**: Tailwind CSS v4 + React Icons
- **Inference Layer**: Groq Cloud API
- **Persistence Foundation**: React Context + LocalStorage

---
*Optimized for professional deployment and high-fidelity interaction.*
