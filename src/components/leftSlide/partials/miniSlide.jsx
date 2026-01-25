import LOGO from '/home/anwar/OmniAgent/src/assets/LOGO.png'
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { TiAttachment } from "react-icons/ti";
import { ImBrightnessContrast } from "react-icons/im";
import { RiSettings2Line } from "react-icons/ri";





function MiniSlide() {
    return (
        <>
        <nav className="navSLide">
        <div className='logoPicture'>
            <img src= {LOGO} />
        </div>
        <div className='navigation'>
            <MdOutlineChatBubbleOutline />
            <IoBookOutline />
            <TiAttachment />

        </div>
        <div className='settings'>
            <ImBrightnessContrast />
            <RiSettings2Line />
            <div className='profile'>
                <img src="" />
            </div>
        </div>
        </nav>
        </>
    );
}

export default MiniSlide;