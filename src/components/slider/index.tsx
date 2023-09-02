import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import ItemSlider from "../itemSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  nextCharacter,
  prevCharacter,
} from "@/redux/slices/characters/charactersActions";

const Slider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentCharacter } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const handleNext = async () => {
    await dispatch(nextCharacter());
  };

  const handlePrev = async () => {
    await dispatch(prevCharacter());
  };

  return (
    <>
      <div className="flex gap-2 mb-4 items-center">
        <button
          disabled={currentCharacter?.id === 1}
          onClick={() => {
            handlePrev();
            setIsLoading(true);
          }}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-slate-100 disabled:opacity-50 disabled:bg-white"
        >
          <IoChevronBackOutline className="text-xl" />
        </button>

        {currentCharacter && (
          <ItemSlider
            item={currentCharacter}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}

        <button
          onClick={() => {
            handleNext();
            setIsLoading(true);
          }}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-slate-100 disabled:opacity-50 disabled:bg-white"
        >
          <IoChevronForwardOutline className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Slider;
