import { useState, useEffect } from "react";

export const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p className="text-6xl font-semibold">{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
