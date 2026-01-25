import { MdOutlineUploadFile } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

function MainSlide() {
  return (
    <>
      <section className="mainSLide">
        <div className="import">
          <div className="omni">
            <h1>Omni Agent</h1>
            <a href="">New Agent</a>
            <a href="" className="upload">
              <MdOutlineUploadFile />
              Import Agent
            </a>
          </div>
          <div className="search">
            <IoMdSearch />
            <input type="search" name="" id="" />
          </div>
        </div>
        <div className="dash">
          <div className="dashboard">
            <MdOutlineDashboard />
            <p>Dashboards</p>
          </div>
          <div className="works">
            <div className="iconWork">
              <FaRegFolderOpen />
              <p>Works</p>
              <div className="chevron">
                <IoChevronDown />
              </div>
            </div>
            <div className="workTitles">
              <p className="workItems">Atoll Construction</p>
              <p className="workItems">Le Amore</p>
              <p className="workItems">Realize MGMT</p>
              <p className="workItems">SY-CL</p>
              <p className="workItems">Cerebrum Inc.</p>
            </div>
          </div>
          <div className="general">
            <div className="iconWork">
              <FaRegFolderOpen />
              <p>General</p>
              <div className="chevron">
                <IoChevronDown />
              </div>
            </div>
          </div>
          <div className="money">
            <div className="iconWork">
              <FaRegFolderOpen />
              <p>MoneyBudgetting</p>
              <div className="chevron">
                <IoChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="plan">
            <div className="description">
                <h2>Premium Plan</h2>
                <p>
                    Upgrade to Premium Plan to Unlock More Features You Need
                </p>
            </div>
            <div className="upgradeBtn">
                <a href="">Upgrade Premium</a>
            </div>
        </div>
      </section>
    </>
  );
}

export default MainSlide;
