import LOGO from "/home/anwar/OmniAgent/src/assets/LOGO.jpeg";
import { IoMdSearch } from "react-icons/io";
import { TiAttachment } from "react-icons/ti";
import { IoImageOutline } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";

function MainPage() {
  return (
    <section className=" mainPage flex flex-col items-center justify-center h-[calc(66vh-64px)] px-6 bg-gray-50">


      <div className="flex flex-col items-center text-center max-w-2xl space-y-5">

        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
          <img src={LOGO} alt="logo" className="w-16 h-16 object-cover rounded-full" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Welcome To Omni AI Your AI Copilot Awaits.
          </h1>

          <p className="text-gray-500 text-sm md:text-base">
            Discover smarter conversations, automated insights, and limitless
            creativity — all in one dashboard.
          </p>

          <p className="text-gray-400 text-sm">
            Let’s set you up in just a few steps.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-3">

        <div className="flex items-center gap-3 text-gray-400">
          <IoMdSearch size={18} />
          <input
            type="text"
            placeholder="Ask anything OmniAI..."
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4 text-gray-500 text-sm">

            <ActionBtn icon={<TiAttachment size={18} />} label="Attach" />
            <ActionBtn icon={<IoImageOutline size={18} />} label="Upload Media" />

          </div>

          <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition">
            <BiSolidSend size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}

export default MainPage;

function ActionBtn({ icon, label }) {
  return (
    <button className="flex items-center gap-1.5 hover:text-orange-500 transition">
      {icon}
      <span>{label}</span>
    </button>
  );
}
