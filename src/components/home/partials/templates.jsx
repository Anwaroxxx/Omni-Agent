import { FaCode, FaPenNib, FaLightbulb, FaRobot } from "react-icons/fa";
import { useChat } from "../../../context/ChatContext";

function Templates() {
  const { sendMessage, activeChatId, messages } = useChat();

  // Only show templates on initial screen
  if (activeChatId || messages.length > 0) return null;

  const templateData = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "Code Assistant",
      description: "Write, debug, or optimize your code with ease.",
      prompt: "Can you help me write a clean React component using Tailwind CSS?",
    },
    {
      icon: <FaPenNib className="text-purple-500" />,
      title: "Content Writer",
      description: "Draft blogs, emails, and creative stories.",
      prompt: "Write a professional email to a client explaining a project delay.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      title: "Brainstorming",
      description: "Generate innovative ideas for your next project.",
      prompt: "I need 5 creative ideas for a sustainable tech startup.",
    },
    {
      icon: <FaRobot className="text-green-500" />,
      title: "AI Automation",
      description: "Learn how to automate tasks using AI tools.",
      prompt: "How can I use AI to automate my daily scheduling?",
    },
  ];

  return (
    <section className="templates px-6 py-10 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
          Find Your Template AI Actions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templateData.map((template, index) => (
          <div
            key={index}
            onClick={() => sendMessage(template.prompt)}
            className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors duration-300 text-2xl">
                {template.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {template.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-500 transition-colors">
                {template.description}
              </p>
            </div>
            
            <div className="mt-8 flex justify-end">
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-orange-500 group-hover:text-white transition-all transform group-hover:rotate-45">
                 <FaRobot size={16} />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;