import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { IoShareSocial } from "react-icons/io5";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className="mainNavigation">
        <div className="history">
          <div className="upgradePlan">
            <AiOutlineDollarCircle />
            <p>Upgrade Plan</p>
          </div>
          <div className="historyBtn">
            <LuHistory />
            <p>History</p>
          </div>
        </div>
        <div className="share">
          <div className="shareItems">
            <IoShareSocial />
          </div>
          <div className="shareItems">
            <BsFillEnvelopeExclamationFill />
          </div>
          <div className="shareItems">
            <IoMdNotifications />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
