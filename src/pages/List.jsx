import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

export default function List() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex flex-col min-h-screen p-5 bg-gray-200 w-full lg:w-1/3 md:w-1/2 justify-self-center">
        <div className="mb-auto space-y-5">
          {/* Navbar */}
          <div className="flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-3 mb-5 drop-shadow-md">
            <NavLink to="/menu" className="font-semibold">
              WeatherApp
            </NavLink>
            <div className="flex items-center space-x-3">
              <img src={`https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`} alt="" className="rounded-full w-8 h-8 cursor-pointer" onClick={() => navigate("/login")} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-3xl font-extrabold mb-5">404</div>
            <div className="text-sm font-medium mb-2">Page LIST not Found</div>
            <div className="px-5 py-2 text-sm font-semibold text-white bg-green-500 cursor-pointer" onClick={() => navigate("/")}>
              Go Home
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <div className="flex justify-around items-center sticky bottom-0 -m-5 px-5 py-4 mt-6 bg-gradient-to-l from-green-600 to-green-500 text-white text-xl">
          <AiFillHome className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/")} />
          <MdDashboard className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/menu")} />
          <IoMdListBox className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/list")} />
          <FaUser className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/login")} />
        </div>
        {/* Footer End */}
      </div>
    </div>
  );
}