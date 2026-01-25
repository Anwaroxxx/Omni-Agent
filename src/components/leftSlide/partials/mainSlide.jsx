import { MdOutlineUploadFile } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

function MainSlide() {
  return (
    <section className="ml-[72px] w-[280px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between px-4 py-5">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-lg font-semibold text-gray-900">Omni Agent</h1>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
            New Agent
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
            <MdOutlineUploadFile size={18} />
            Import Agent
          </button>
        </div>

        <div className="relative">
          <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
        </div>

        <div className="space-y-4 text-sm">
          <NavItem
            icon={<MdOutlineDashboard size={18} />}
            label="Dashboards"
            active
          />
          <div>
            <NavGroup title="Works" />

            <div className="mt-2 space-y-1 pl-6">
              {[
                "Atoll Construction",
                "Le Amore",
                "Realize MGMT",
                "SY-CL",
                "Cerebrum Inc.",
              ].map((item) => (
                <p
                  key={item}
                  className="px-3 py-1.5 rounded-md text-gray-600 cursor-pointer hover:bg-orange-100 hover:text-orange-600 transition"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <NavGroup title="General" />

          <NavGroup title="Money Budgeting" />
        </div>
      </div>
      <div className="bg-orange-500 text-white rounded-xl p-4 space-y-3">
        <h2 className="font-semibold text-sm">Premium Plan</h2>
        <p className="text-xs opacity-90 leading-relaxed">
          Upgrade to Premium Plan to Unlock More Features You Need
        </p>

        <button className="w-full bg-white text-orange-500 py-2 rounded-lg text-sm font-semibold hover:bg-orange-100 transition">
          Upgrade Premium
        </button>
      </div>
    </section>
  );
}

export default MainSlide;

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
      ${active ? "bg-orange-100 text-orange-600" : "text-gray-700 hover:bg-gray-100"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function NavGroup({ title }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
      <div className="flex items-center gap-3">
        <FaRegFolderOpen size={16} />
        <span>{title}</span>
      </div>
      <IoChevronDown size={16} />
    </div>
  );
}
