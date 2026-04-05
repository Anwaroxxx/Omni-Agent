import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

function Navbar() {
  return (
    <nav className="w-full h-[64px] bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between px-6 transition-colors duration-300">

      <div className="flex items-center gap-3">

        <button 
          onClick={() => alert("Plans coming soon!")}
          className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-900/50 transition"
        >
          <AiOutlineDollarCircle size={18} />
          Upgrade Plan
        </button>

        <button 
          onClick={() => alert("History feature coming soon!")}
          className="flex items-center gap-2 border border-gray-200 dark:border-zinc-700 px-4 py-2 rounded-full text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
        >
          <LuHistory size={16} />
          History
        </button>

      </div>

      <div className="flex items-center gap-3">

        <IconButton onClick={() => alert("Share feature coming soon!")}>
          <IoShareSocial size={18} />
        </IconButton>

        <IconButton onClick={() => alert("Mail feature coming soon!")}>
          <BsFillEnvelopeExclamationFill size={16} />
        </IconButton>

        <IconButton onClick={() => alert("Notifications coming soon!")}>
          <IoMdNotifications size={18} />
        </IconButton>

      </div>
    </nav>
  );
}

export default Navbar;

function IconButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-800 dark:hover:text-gray-200 transition"
    >
      {children}
    </button>
  );
}
