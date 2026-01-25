import LOGO from "/home/anwar/OmniAgent/src/assets/LOGO.png";
import { IoMdSearch } from "react-icons/io";
import { TiAttachment } from "react-icons/ti";
import { IoImageOutline } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";


function MainPage(props) {
  return (
    <>
      <section className="MainPage">
        <div className="mainDescriptions">
          <div className="logoMain">
            <img src={LOGO} />
          </div>
          <div className="welcome">
            <h1>Welcome To Omni AI Your AI Copilot Awaits.</h1>
            <p>
              Discover smarter conversations , automated insights, and limited
              creativity - all in one dashboards.
            </p>
            <p>Let's set you up in just few steps.</p>
          </div>
        </div>
        <div className="mainSearchSection">
          <div className="ask">
            <IoMdSearch />
            <p>Ask anything OmniAI...</p>
          </div>
          <div className="attachAndUpload">
            <div className="leftSide">
              <div className="searchItemsAndUpload">
                <TiAttachment />
                <p>Attach</p>
              </div>
              <div className="searchItemsAndUpload">
                <IoImageOutline />
                <p>Upload Media</p>
              </div>
            </div>
            <div className="rightSide">
                <div className="sendMsg">
                    <BiSolidSend />

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
