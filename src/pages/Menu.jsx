import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdDashboard } from "react-icons/md";


export default function Menu() {
  const navigate = useNavigate();
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_SOME_KEY}&units=metric`)
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setWeather(data);
          toast.success("Success Find Location");
        } else {
          throw new Error(data.message || "Something went wrong!");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        // setWeather(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

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
          <div className="flex flex-col items-center justify-center">
           <Toaster />
                <div className="py-4 text-5xl sm:text-center font-serif">Search Weather</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter city name" className="px-4 py-3" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button type="submit" className="px-4 py-3 bg-green-500 ">
                     Search
                    </button>
                    
                    </form>
                    {weather !== null && (
                    <div className="card bg-gray-400  w-[250px] h-[350px] flex flex-col justify-center items-center mt-10 mx-auto">
                        <h4 className="text-2xl">{weather.name}</h4>
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" className="w-[50px]" />
                        <h2 className="text-5xl font-bold mb-2">{Math.round(weather.main.temp)}&deg;C</h2>
                        <p>{weather.weather[0].main}</p>
                        <div className="flex justify-between space-x-6 mt-5">
                            <div>
                                <h3 className="text-xl font-bold mb-2">{weather.main.humidity}%</h3>
                                <p className="text-sm">Humidity</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{weather.wind.speed} Km/H</h3>
                                <p className="text-sm">Wind Speed</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
          </div>
           {/* Footer start */}
           <div>
            <div className="mt-5 pb-10 -mb-3 flex justify-center ">
              <div className="text-[10px] opacity-50 text-center">
                <div>Ⓒ Copyright 2023 - All rights reserved</div>
                <div>Coded by Rizki B. 🔥</div>
              </div>
            </div>
          </div>
          {/* Footer end */}
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