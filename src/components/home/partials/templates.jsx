import { FaUser, FaRegEnvelope } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri"; 
import { LuListTodo } from "react-icons/lu";

function Templates() {
  return (
    <>
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Find Your Template Chats AI</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-between min-h-[160px]">
          <p className="text-[15px] font-medium text-gray-800 leading-snug">
            Write a to do list with best practice for designers
          </p>
          <div className="flex justify-between items-center mt-6">
            <FaUser className="text-gray-400 text-lg" />
            <button className="p-2 bg-gray-50 rounded-lg">
              <RiSendPlane2Fill className="text-gray-400 rotate-45" />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-between min-h-[160px]">
          <p className="text-[15px] font-medium text-gray-800 leading-snug">
            Draft a follow-up email for new leads from yesterday
          </p>
          <div className="flex justify-between items-center mt-6">
            <FaRegEnvelope className="text-gray-400 text-lg" />
            <button className="p-2 bg-gray-50 rounded-lg">
              <RiSendPlane2Fill className="text-gray-400 rotate-45" />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-between min-h-[160px]">
          <p className="text-[15px] font-medium text-gray-800 leading-snug">
            Generate a quick task list for my sales team and report results
          </p>
          <div className="flex justify-between items-center mt-6">
            <LuListTodo className="text-gray-400 text-lg" />
            <button className="p-2 bg-gray-50 rounded-lg">
              <RiSendPlane2Fill className="text-gray-400 rotate-45" />
            </button>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default Templates;