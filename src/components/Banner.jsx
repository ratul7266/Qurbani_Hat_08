import React from "react";
import BannerImg from "../../public/images/animal14.jpg";
import Image from "next/image";
import { PlayFill } from "@gravity-ui/icons";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden bg-green-50 p-6 md:p-12 gap-10">
        <div className="mx-auto  px-8 md:px-16 flex flex-col md:flex-row items-center justify-around md:justify-between h-full py-12 md:py-0 min-h-96">
          <div className="flex-1 z-10 flex flex-col justify-center gap-5 md:gap-6">
            <h1 className="font-extrabold leading-tight text-green-950 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Premium Quality Cows
              <br />
              for high Quality Meat
            </h1>
            <p className="text-gray-800 font-semibold text-sm sm:text-xl leading-relaxed max-w-md">
              A market for selling stronger and healthier cows, goats, sheep,
              etc. for Qurbani. Trusted by thousands of loyal people across the
              country.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button className="px-6 py-3 bg-[#1a3c2e] text-white font-semibold rounded-sm hover:opacity-90">
                Shop Now 
              </button>

              <button className="px-6 py-3 border-2 border-[#1a3c2e] text-[#1a3c2e] font-semibold rounded-sm hover:bg-stone-200">
                Know More
              </button>
            </div>
            <div className="flex items-start gap-10 mt-4">
              {[
                { value: "10k+", label: "Happy Customers" },
                { value: "25%", label: "Customer Satisfaction" },
                { value: "100%", label: "Organic Animals" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-extrabold text-[#1a3c2e] text-xl sm:text-2xl md:text-[1.6rem]">
                    {stat.value}
                  </p>
                  <p className="text-[#5a6b60] text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-around md:items-start items-center  relative min-h-80 md:min-h-105">
            <div className="absolute -right-10 -top-5 w-[320px] h-80 md:w-130 md:h-130 " />

            <div className="relative z-10 w-120 h-120 overflow-hidden rounded-[60%_40%_55%_45%/50%_60%_40%_55%]">
              <Image
                src={BannerImg}
                alt="cow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between px-8 md:px-16 py-5 gap-6 bg-green-800">
        <p className="text-white font-semibold text-sm">
          10k+ Client With <br /> Positive Reviews
        </p>
        <div className="relative flex items-center gap-4">
          <p className="text-white text-sm font-semibold text-right">
            Healthy Life With <br /> Fresh Animals
          </p>

          <div className="relative w-14 h-14 bg-black/30 rounded-md overflow-hidden">
            <Image
              src={BannerImg}
              alt="Animal"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-lg">
                  <PlayFill />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
