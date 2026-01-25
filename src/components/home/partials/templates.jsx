import { FaUser } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";

function Templates() {
  return (
    <>
      <section className="templates">
        <div className="Title">
          <h2>Find Your Template Chats AI</h2>
        </div>
        <div className="cards">
          <div className="cardsItems">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              distinctio.{" "}
            </div>
            <div>
              <div>
                <FaUser />
              </div>
              <div>
                <IoSendSharp />
              </div>
            </div>
          </div>
          <div className="cardsItems">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              distinctio.{" "}
            </div>
            <div>
              <div>
                <FaEnvelope />
              </div>
              <div>
                <IoSendSharp />
              </div>
            </div>
          </div>
          <div className="cardsItems">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              distinctio.{" "}
            </div>
            <div>
              <div>
                <FcTodoList />
              </div>
              <div>
                <IoSendSharp />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Templates;
