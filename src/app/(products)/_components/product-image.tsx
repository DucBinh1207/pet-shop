import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductImage() {
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (sourceRef.current && targetRef.current && containerRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const sourceRect = sourceRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const xRatio =
        (targetRect.width - containerRect.width) / sourceRect.width;
      const yRatio =
        (targetRect.height - containerRect.height) / sourceRect.height;

      const left = Math.max(
        Math.min(e.pageX - sourceRect.left, sourceRect.width),
        0,
      );
      const top = Math.max(
        Math.min(e.pageY - sourceRect.top, sourceRect.height),
        0,
      );

      setOffset({
        left: left * -xRatio,
        top: top * -yRatio,
      });
    }
  };

  return (
    <div
      className="up-smallest-screen:hover:shadow-image_shadow relative w-full cursor-zoom-in overflow-hidden p-[30px] pb-[80%] hover:border hover:border-solid hover:border-light_gray_color_second"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div ref={sourceRef} className="absolute inset-0">
        <Image src="/assets/images/food-detail.jpg" fill alt="whole hearted" />
      </div>

      <div
        ref={targetRef}
        className="absolute inset-0"
        style={{
          opacity: opacity,
          transform: `translate(${offset.left}px, ${offset.top}px) scale(2)`,
          transformOrigin: "top left",
        }}
      >
        <Image src="/assets/images/food-detail.jpg" fill alt="whole hearted" />
      </div>
    </div>
  );
}
