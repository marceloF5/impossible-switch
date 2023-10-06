"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isSwitched, setIsSwitched] = useState(false);

  useEffect(() => {
    if (isSwitched) {
      setTimeout(() => setIsSwitched(false), 2500);
    }
  }, [isSwitched]);

  const handleSwitch = () => {
    setIsSwitched(!isSwitched);
  };

  const bg = isSwitched ? "bg-green-400" : "bg-gray-400";
  const translate = isSwitched ? "translate-x-36" : "";

  return (
    <main className="bg-[#947cb0] w-full h-screen flex flex-col justify-center items-center relative">
      <div
        className={`cursor-pointer w-64 h-28 rounded-full flex items-center px-2 transition-colors duration-500 ${bg}`}
        onClick={handleSwitch}
      >
        <div
          className={`transition ease-in-out duration-200 bg-white w-24 h-24 rounded-full absolute ${translate}`}
        />
      </div>
    </main>
  );
}
