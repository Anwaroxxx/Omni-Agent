import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

function Navbar() {
  return (
    <nav className="w-full h-[64px] bg-white border-b border-gray-200 flex items-center justify-between px-6">

      <div className="flex items-center gap-3">

        <button className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition">
          <AiOutlineDollarCircle size={18} />
          Upgrade Plan
        </button>

        <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition">
          <LuHistory size={16} />
          History
        </button>

      </div>

      <div className="flex items-center gap-3">

        <IconButton>
          <IoShareSocial size={18} />
        </IconButton>

        <IconButton>
          <BsFillEnvelopeExclamationFill size={16} />
        </IconButton>

        <IconButton>
          <IoMdNotifications size={18} />
        </IconButton>

      </div>
    </nav>
  );
}

export default Navbar;

function IconButton({ children }) {
  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition">
      {children}
    </button>
  );
}
