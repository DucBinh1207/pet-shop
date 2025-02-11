"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import LoadingCircle from "../assets/animations/loading-circle.json";

export default function Loading() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="z-[100] h-[200px] w-[200px] translate-y-[50%]">
        <Lottie animationData={LoadingCircle} loop={true} />
      </div>
    </div>
  );
}
