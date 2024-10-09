"use client";

import { USER_DASHBOARD_OPTIONS } from "@/constants/user/main-dashboard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserDashboard = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex-center flex-row">
      {USER_DASHBOARD_OPTIONS.map((option, index) => (
        <div
          key={option.title}
          onClick={() => router.push(option.url)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`w-[244px] h-[300px] flex-center flex-col mr-[100px] border border-GREY-20 rounded-2xl cursor-pointer transition-all duration-300 ${
            hoveredIndex === index
              ? "border-BRAND-50 shadow-[4px_4px_10px_rgba(128,90,213,0.2)]"
              : ""
          }`}
        >
          <Image
            width={128}
            height={128}
            src={option.icon}
            alt={option.title}
          />
          <h1 className="text-lg font-bold mb-[14px]">{option.title}</h1>
          <div className="relative flex-center">
            <p
              className={`text-sm transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              {option.subText}
            </p>
            <Image
              width={36}
              height={36}
              src="/icons/next-arrow.svg"
              alt="go to selected page"
              className={`absolute transition-opacity duration-300 mt-4 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserDashboard;
