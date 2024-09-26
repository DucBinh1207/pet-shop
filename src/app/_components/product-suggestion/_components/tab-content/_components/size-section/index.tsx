"use client";

import { useState } from "react";

export default function Size() {
  const [bgSelect, setBgSelect] = useState("/assets/icons/angle-down-icon.svg");
  const [isOpen, setIsOpen] = useState(false);

  const onBlurSelect = () => {
    setBgSelect("/assets/icons/angle-down-icon.svg");
    setIsOpen(false);
  };

  const onClickSelect = () => {
    if (isOpen) {
      setBgSelect("/assets/icons/angle-down-icon.svg");
      setIsOpen(false);
    } else {
      setBgSelect("/assets/icons/angle-up-icon.svg");
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="relative">
        <select
          className="relative h-auto w-full appearance-none rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
          style={{
            backgroundImage: `url(${bgSelect})`,
            backgroundPosition: "right 10px center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "12px",
          }}
          onBlur={onBlurSelect}
          onClick={onClickSelect}
        >
          <option value="1">Choose your size</option>
          <option value="2">Small</option>
          <option value="3">Medium</option>
          <option value="4">Big</option>
        </select>
      </div>
    </>
  );
}
