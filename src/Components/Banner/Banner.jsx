// import React, { useEffect, useState } from "react";
// import BannerImage from "../../assets/banner.jpg";

// const Banner = () => {
//   const totalSecond = 5 * 60 * 60;
//   const [timeLeft, setTimeLeft] = useState(totalSecond);

//   useEffect(() => {
//     let endTime = localStorage.getItem("saleEndTime");

//     if (!endTime) {
//       endTime = Date.now() + totalSecond * 1000;
//       localStorage.setItem("saleEndTime", endTime);
//     } else {
//       endTime = parseInt(endTime, 10);
//     }

//     const timer = setInterval(() => {
//       const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
//       setTimeLeft(remaining);

//       if (remaining <= 0) {
//         clearInterval(timer);
//         localStorage.removeItem("saleEndTime");
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [totalSecond]);

//   const hours = Math.floor(timeLeft / 3600);
//   const minutes = Math.floor((timeLeft % 3600) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <section
//       className=" bg-red-300 h-[60vh] mt-[14vh] bg-cover bg-top"
//       style={{ backgroundImage: `url(${BannerImage})` }}
//     >
//       <div className="md:max-w-[1350px] mx-auto p-5 h-100 flex flex-col justify-center">
//         <h1 className="text-red-600 text-7xl uppercase font-bold tracking-tight ml-[4rem]">
//           Big Sale!
//         </h1>
//         <h2 className="text-zinc-800 text-3xl uppercase font-bold ml-[4rem] mt-8 ">
//           Up to 50% off
//         </h2>
//         {timeLeft > 0 ? (
//           <div className="text-6xl font-bold text-zinc-800 mt-[3rem] ml-[4rem] flex gap-x-3">
//             <span className="text-white bg-zinc-800 p-3 rounded-[0.5rem]">
//               {hours.toString().padStart(2, "0")}
//             </span>
//             :
//             <span className="text-white bg-zinc-800 p-3 rounded-[0.5rem]">
//               {minutes.toString().padStart(2, "0")}
//             </span>
//             :
//             <span className="text-white bg-zinc-800 p-3 rounded-[0.5rem]">
//               {seconds.toString().padStart(2, "0")}
//             </span>
//           </div>
//         ) : (
//           <div className="text-6xl font-bold text-red-700 mt-[3rem] ml-[4rem]">
//             Sale Ended!
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/banner.jpg";

const Banner = () => {
  const totalSecond = 23 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(totalSecond);

  useEffect(() => {
    let endTime = localStorage.getItem("saleEndTime");

    if (!endTime) {
      endTime = Date.now() + totalSecond * 1000;
      localStorage.setItem("saleEndTime", endTime);
    } else {
      endTime = parseInt(endTime, 10);
    }

    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        localStorage.removeItem("saleEndTime");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalSecond]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="relative h-[60vh] mt-[14vh] flex items-center justify-between overflow-hidden ">
      <img
        src={BannerImage}
        alt="Sale Banner"
        className=" hidden md:block absolute inset-0 w-full h-full object-contain object-center"
      />

      <img
        src={BannerImage}
        alt="Sale Banner"
        className=" block md:hidden absolute inset-0 w-full h-full object-contain object-center"
      />

      {/* Content */}
      <div className="relative text-center md:text-left md:max-w-[1350px] mx-auto p-5">
        <h1 className="text-red-600 text-4xl md:text-7xl uppercase font-bold tracking-tight">
          Big Sale!
        </h1>
        <h2 className="text-white md:text-zinc-800 text-xl md:text-3xl uppercase font-bold mt-4 md:mt-8">
          Up to 50% off
        </h2>

        {timeLeft > 0 ? (
          <div className="text-3xl md:text-6xl font-bold text-white md:text-zinc-800 mt-6 md:mt-[3rem] flex justify-center md:justify-start gap-x-2 md:gap-x-3">
            <span className="bg-zinc-800 p-2 md:p-3 rounded-[0.5rem] text-white">
              {hours.toString().padStart(2, "0")}
            </span>
            :
            <span className="bg-zinc-800 p-2 md:p-3 rounded-[0.5rem] text-white">
              {minutes.toString().padStart(2, "0")}
            </span>
            :
            <span className="bg-zinc-800 p-2 md:p-3 rounded-[0.5rem] text-white">
              {seconds.toString().padStart(2, "0")}
            </span>
          </div>
        ) : (
          <div className="text-3xl md:text-6xl font-bold text-red-700 mt-6 md:mt-[3rem]">
            Sale Ended!
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
