"use client";

import { useEffect, useState } from "react";
import CategoryHighlightItem from "./_components/category-highlight-item";

export default function CategoryHighlight() {
  const [items, setItems] = useState([1, 2, 3, 4]);
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const width = window.innerWidth;

        if (width < 1648) {
          const randomIndex1 = Math.floor(Math.random() * 4);
          let randomIndex2;

          do {
            randomIndex2 = Math.floor(Math.random() * 4);
          } while (randomIndex2 === randomIndex1);

          [newItems[randomIndex1], newItems[randomIndex2]] = [
            newItems[randomIndex2],
            newItems[randomIndex1],
          ];
        } else if (width < 1261 && width > 768) {
          let randomIndex1, randomIndex2;
          do {
            randomIndex1 = Math.floor(Math.random() * 4);
            randomIndex2 = Math.floor(Math.random() * 4);
          } while (
            randomIndex1 === 0 ||
            randomIndex1 === 1 ||
            randomIndex2 === 0 ||
            randomIndex2 === 1
          );

          [newItems[0], newItems[1]] = [
            newItems[randomIndex1],
            newItems[randomIndex2],
          ];
        } else if (width < 768) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * 4);
          } while (randomIndex === 0);
          newItems[0] = newItems[randomIndex];
        }

        return newItems;
      });
    }, 1000);

    return () => clearInterval(interval); // Dọn dẹp
  }, []);

  return (
    <div className="mx-auto mb-[25px] mt-[35px] max-w-[1920px]">
      <div className="flex overflow-hidden px-[50px]">
        <div className="flex w-full overflow-hidden">
          <CategoryHighlightItem order={items[0]} />
          <CategoryHighlightItem order={items[1]} />
          <CategoryHighlightItem order={items[2]} />
          <CategoryHighlightItem order={items[3]} />
        </div>
      </div>
    </div>
  );
}
