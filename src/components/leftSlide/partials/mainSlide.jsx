import { MdOutlineUploadFile } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolderOpen, FaTrash } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { useChat } from "../../../context/ChatContext";

function MainSlide() {
  const { conversations, activeChatId, selectChat, deleteChat, startNewChat } = useChat();

  return (
    <section className="ml-[72px] w-[280px] h-screen bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex flex-col justify-between px-4 py-5 font-sans transition-colors duration-300">
      <div className="space-y-6 overflow-hidden flex flex-col h-full">
        <div className="space-y-4 flex-shrink-0">
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Omni Agent
          </h1>

          <button 
            onClick={startNewChat}
            className="w-full bg-orange-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all transform active:scale-[0.98] shadow-md shadow-orange-200 dark:shadow-none"
          >
            + New Chat
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-zinc-700 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition">
            <MdOutlineUploadFile size={18} />
            Import Agent
          </button>
        </div>

        <div className="relative flex-shrink-0">
          <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search chats..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50/50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:focus:ring-orange-900 transition"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 text-sm pr-1 scrollbar-thin dark:scrollbar-zinc">
          <div>
            <NavGroup title="Recent Chats" />
            <div className="mt-2 space-y-1">
              {conversations.length > 0 ? (
                conversations.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => selectChat(chat.id)}
                    className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200
                    ${activeChatId === chat.id 
                      ? "bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-medium translate-x-1" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-gray-100"}`}
                  >
                    <p className="truncate max-w-[180px]">{chat.title}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-opacity"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="px-3 py-4 text-gray-400 dark:text-zinc-600 italic text-xs text-center">No recent conversations</p>
              )}
            </div>
          </div>
          
          <NavItem icon={<MdOutlineDashboard size={18} />} label="Dashboards" />
          <NavGroup title="Works" />
          <NavGroup title="General" />
        </div>
      </div>

      <div className="mt-auto bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-5 space-y-4 shadow-xl dark:shadow-none">
        <div className="space-y-1">
          <h2 className="font-bold text-sm">Pro Member</h2>
          <p className="text-[11px] opacity-80 leading-relaxed">
            Get unlimited messages, vision models, and priority support.
          </p>
        </div>

        <button className="w-full bg-white text-orange-600 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-50 transition-colors shadow-sm">
          Upgrade Now
        </button>
      </div>
    </section>
  );
}

export default MainSlide;

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all
      ${active ? "bg-orange-50 text-orange-600 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function NavGroup({ title }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-gray-500 hover:bg-gray-50 transition uppercase text-[10px] font-bold tracking-wider mt-4">
      <div className="flex items-center gap-2">
        <span>{title}</span>
      </div>
      <IoChevronDown size={14} />
    </div>
  );
}
