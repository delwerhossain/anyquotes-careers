import { useState, useEffect } from "react";

const Attendants = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDownDate = new Date("Oct 1, 2023 00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="h-screen bg-gray-800 py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl lg:text-5xl text-white font-bold mb-8">
          Coming Soon
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12">
          Stay tuned for updates and get ready for an extraordinary experience!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 p-2">
          <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
            <div id="days" className="font-bold text-xl text-gray-800">
              {days}
            </div>
            <div className="text-xs uppercase text-gray-500">days</div>
          </div>
          <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
            <div id="hours" className="font-bold text-xl text-gray-800">
              {hours}
            </div>
            <div className="text-xs uppercase text-gray-500">hours</div>
          </div>
          <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
            <div id="minutes" className="font-bold text-xl text-gray-800">
              {minutes}
            </div>
            <div className="text-xs uppercase text-gray-500">minutes</div>
          </div>
          <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
            <div id="seconds" className="font-bold text-xl text-gray-800">
              {seconds}
            </div>
            <div className="text-xs uppercase text-gray-500">seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attendants;
