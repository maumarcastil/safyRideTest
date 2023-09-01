import React, { useEffect, useState } from "react";
import { Character } from "@/types/characters";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import ItemSlider from "../itemSlider";
import SecondItemSlider from "../itemSlider/secondItemSlider";

interface SliderProps {
  items: Character[];
}

const Slider = ({ items }: SliderProps) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [widthInitElement, setWidthInitElement] = useState(0);
  const [widthLastElement, setWidthLastElement] = useState(0);

  const refInit = React.useRef<HTMLDivElement>(null);
  const refLast = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserverInitElement = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width > 0) setWidthInitElement(width);
      }
    });
    const resizeObserverLastElement = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width > 0) setWidthLastElement(width);
      }
    });

    if (refInit.current) {
      resizeObserverInitElement.observe(refInit.current);
    }
    if (refLast.current) {
      resizeObserverLastElement.observe(refLast.current);
    }

    return () => {
      if (refInit.current) {
        resizeObserverInitElement.unobserve(refInit.current);
      }
      if (refLast.current) {
        resizeObserverLastElement.unobserve(refLast.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (currentItem < items.length - 1) {
      setCurrentItem(currentItem + 1);
    }
  };

  const handlePrev = () => {
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
    } else {
      setCurrentItem(0);
    }
  };

  return (
    <>
      <div className="flex gap-2 mb-4 items-center">
        <button
          onClick={handlePrev}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-slate-100"
        >
          <IoChevronBackOutline className="text-xl" />
        </button>

        <div ref={refInit} className="flex items-center scale-95">
          {currentItem === 0 ? (
            <div
              style={{
                width: `${widthLastElement}px`,
              }}
            />
          ) : (
            <SecondItemSlider
              item={items[currentItem === 0 ? currentItem : currentItem - 1]}
            />
          )}
        </div>
        <ItemSlider item={items[currentItem]} />
        <div ref={refLast} className="flex items-center scale-95">
          {currentItem === items.length - 1 ? (
            <div
              style={{
                width: `${widthInitElement}px`,
              }}
            />
          ) : (
            <SecondItemSlider item={items[currentItem + 1]} />
          )}
        </div>

        <button
          onClick={handleNext}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-slate-100"
        >
          <IoChevronForwardOutline className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Slider;
