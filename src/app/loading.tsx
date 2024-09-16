"use client";

import Lottie from "lottie-react";
import LoadingCircle from "../assets/animations/loading-circle.json";

export default function Loading() {
  return (
      <div className="fixed left-[50%] top-[50%] z-[100] h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%]">
        <Lottie animationData={LoadingCircle} loop={true} />
      </div>
  );
}
