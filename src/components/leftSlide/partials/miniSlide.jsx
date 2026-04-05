import LOGO from "../../../assets/LOGO.jpeg";
import profile from "../../../assets/profile.jpeg";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { TiAttachment } from "react-icons/ti";
import { ImBrightnessContrast } from "react-icons/im";
import { RiSettings2Line } from "react-icons/ri";
import { useTheme } from "../../../context/ThemeContext";

function MiniSlide() {
  const { toggleTheme } = useTheme();

  return (
    <nav className="fixed left-0 top-0 h-screen w-18 bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-between py-4 transition-colors duration-300 z-50">

      <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center border border-orange-200 dark:border-orange-900">
        <img
          src={LOGO}
          alt="logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col gap-6 text-gray-500 dark:text-gray-400">
        <IconWrapper>
          <MdOutlineChatBubbleOutline size={22} />
        </IconWrapper>

        <IconWrapper>
          <IoBookOutline size={22} />
        </IconWrapper>

        <IconWrapper>
          <TiAttachment size={22} />
        </IconWrapper>
      </div>

      <div className="flex flex-col gap-5 items-center">
        <IconWrapper onClick={toggleTheme}>
          <ImBrightnessContrast size={18}  className='darkMode text-gray-600 dark:text-orange-400'/>
        </IconWrapper>

        <IconWrapper>
          <RiSettings2Line size={20} />
        </IconWrapper>

        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-800 overflow-hidden cursor-pointer border border-gray-300 dark:border-zinc-700">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

export default MiniSlide;

function IconWrapper({ children, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-950/50 hover:text-orange-500 transition-all duration-200 active:scale-90"
    >
      {children}
    </div>
  );
}

