"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ProgressStepper = () => {
  const [className, setClassName] = useState();
  const path = usePathname();

  console.log("hello");
  return (
    <>
      <div className="w-1/3 h-20 bg-tu-silver relative rounded-l-3xl before:absolute before:left-full before:border-y-[2.5rem] before:border-l-[1.5rem] before:border-l-tu-silver before:border-y-transparent before:z-20">
        <span className="w-full h-full flex justify-center">degree</span>
      </div>
      <div className="w-1/3 h-20 bg-tu-cherry relative after:absolute after:left-full after:border-y-[2.5rem] after:border-l-[1.5rem] after:border-l-tu-cherry after:border-y-transparent after:z-10"></div>
      <div className="w-1/3 h-20 bg-tu-white relative rounded-r-3xl"></div>
    </>
  );
};

export default ProgressStepper;
