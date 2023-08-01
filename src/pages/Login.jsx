
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import Swal from 'sweetalert2';


export default function Login() {
    const navigate = useNavigate();
    
    const showAlert = () => {
        Swal.fire({
          icon: "error",
          title: "Failed to Login",
          text: "Something went wrong!",
        });
      };
    

    return (
        <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col min-h-screen p-5 bg-gray-200 w-full lg:w-1/3 md:w-1/2 justify-self-center">
          <div className="mb-auto space-y-5">
            <div className="grid grid-cols-1">
              <div className="text-lg font-semibold col-span-1 text-center">Login ➡</div>
            </div>
            <form className="grid grid-cols-1 space-y-2">
              <label htmlFor="email">Email</label>
              <input className="w-1/2 p-2 rounded-xl mt-2" type="email" name="email" placeholder="Email" />
              <label htmlFor="password">Password</label>
              <input className="w-1/2 p-2 rounded-xl" type="password" name="password" placeholder="Password" />
              <div className="flex">
                <button type="submit" className="bg-green-400 text-white mt-3 py-2 px-3 rounded-lg transition ease-in-out hover:bg-green-600" onClick={showAlert}>
                  Login 
                </button>
                
              </div>
            </form>
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
    )
}