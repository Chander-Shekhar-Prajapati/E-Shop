import React, { useEffect, useMemo, useState } from "react";
import BannerImage from "../../assets/banner.jpg";

const SALE_DURATION = 23 * 60 * 60; // 23 Hours

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState(SALE_DURATION);

  useEffect(() => {
    let saleEndTime = Number(localStorage.getItem("saleEndTime"));

    if (!saleEndTime) {
      saleEndTime = Date.now() + SALE_DURATION * 1000;
      localStorage.setItem("saleEndTime", saleEndTime.toString());
    }

    const updateTimer = () => {
      const remaining = Math.max(
        0,
        Math.floor((saleEndTime - Date.now()) / 1000),
      );

      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(interval);
        localStorage.removeItem("saleEndTime");
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const { hours, minutes, seconds } = useMemo(() => {
    return {
      hours: Math.floor(timeLeft / 3600),
      minutes: Math.floor((timeLeft % 3600) / 60),
      seconds: timeLeft % 60,
    };
  }, [timeLeft]);

  return (
    <section className="relative mt-[14vh] h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={BannerImage}
        alt="Big Sale Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Limited Time Offer
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-tight">
              Big Sale!
            </h1>

            <h2 className="mt-3 text-lg sm:text-2xl md:text-3xl font-semibold uppercase text-white">
              Up to <span className="text-red-500">50% OFF</span>
            </h2>

            {timeLeft > 0 ? (
              <div className="flex items-center gap-2 sm:gap-3 mt-8">
                {[hours, minutes, seconds].map((value, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <span className="bg-white text-zinc-900 rounded-lg shadow-lg px-3 py-2 sm:px-5 sm:py-3 text-2xl sm:text-4xl md:text-5xl font-bold min-w-[60px] sm:min-w-[90px] text-center">
                        {String(value).padStart(2, "0")}
                      </span>

                      <span className="text-white text-[10px] sm:text-xs uppercase mt-2 tracking-widest">
                        {index === 0
                          ? "Hours"
                          : index === 1
                            ? "Minutes"
                            : "Seconds"}
                      </span>
                    </div>

                    {index < 2 && (
                      <span className="text-white text-2xl sm:text-4xl md:text-5xl font-bold -mt-6">
                        :
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <h3 className="mt-8 text-3xl sm:text-5xl font-bold text-red-500">
                Sale Ended!
              </h3>
            )}

            <button className="mt-8 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg shadow-lg">
              Shop Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
