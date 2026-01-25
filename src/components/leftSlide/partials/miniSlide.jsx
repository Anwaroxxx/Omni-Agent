import LOGO from '/home/anwar/OmniAgent/src/assets/LOGO.jpeg'
import profile from '/home/anwar/OmniAgent/src/assets/profile.jpeg'
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { TiAttachment } from "react-icons/ti";
import { ImBrightnessContrast } from "react-icons/im";
import { RiSettings2Line } from "react-icons/ri";

function MiniSlide() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-18 bg-white border-r border-gray-200 flex flex-col items-center justify-between py-4">

      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        <img
          src={LOGO}
          alt="logo"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col gap-6 text-gray-500">
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
        <IconWrapper>
          <ImBrightnessContrast size={18}  className='darkMode'/>
        </IconWrapper>

        <IconWrapper>
          <RiSettings2Line size={20} />
        </IconWrapper>

        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
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


function IconWrapper({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-orange-100 hover:text-orange-500 transition">
      {children}
    </div>
  );
}
