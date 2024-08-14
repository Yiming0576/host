import React from "react";
import { TextGenerateEffect } from "./TextGenerate-Effect";
import { TextSectionProps } from "@/components/types/types";
import { TextRevealCard } from "./TextRevealCard";

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <h2 className=" tracking-widest font-writing text-md text-center text-blue-100 max-w-80 left-0">
          {title}
        </h2>
        <div className="flex items-center">
          <span className="font-writing text-sm md:text-base lg:text-lg text-gray-300 italic">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
      <TextGenerateEffect
        words="Hello, I'm Yiming"
        className="text-2xl md:text-3xl lg:text-5xl text-center text-[40px]"
      />
      <p className="text-center text-sm md:text-lg lg:text-2xl text-gray-400">
        {/* <TextRevealCard text={description} revealText={description} className=""/> */}
        {description}
      </p>
    </>
  );
};

export default TextSection;
