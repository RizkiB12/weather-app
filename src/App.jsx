// import "./App.css";
// import toast, { Toaster } from "react-hot-toast";
// import { useState } from "react";

function App() {
  // const [city, setCity] = useState("New York");
  // const [weather, setWeather] = useState(null);

  // const fetchWeather = async () => {
  //   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_SOME_KEY}&units=metric`)
  //     .then(async (res) => {
  //       const data = await res.json();
  //       if (res.status === 200) {
  //         setWeather(data);
  //         toast.success("Success Find Location");
  //       } else {
  //         throw new Error(data.message || "Something went wrong!");
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //       // setWeather(null);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetchWeather();
  // };

  return (
 <></>
    // <div className="app flex flex-col items-center">
    //   <Toaster />
    //   <div className="py-4 text-5xl text-white font-serif">Search Weather</div>
    //   <div className="form">
    //     <form onSubmit={handleSubmit}>
    //       <input type="text" placeholder="Enter city name" className="px-4 py-3" value={city} onChange={(e) => setCity(e.target.value)} />
    //       <button type="submit" className="px-4 py-3 bg-green-500  text-white">
    //         Search
    //       </button>
    //     </form>
    //     {weather !== null && (
    //       <div className="card bg-gray-300 text-white w-[250px] h-[350px] flex flex-col justify-center items-center mt-10 mx-auto">
    //         <h4 className="text-2xl">{weather.name}</h4>
    //         <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" className="w-[50px]" />
    //         <h2 className="text-5xl font-bold mb-2">{Math.round(weather.main.temp)}&deg;C</h2>
    //         <p>{weather.weather[0].main}</p>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default App;
