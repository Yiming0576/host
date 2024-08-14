import React from "react";
import { Spotlight } from "./Spotlight/Spotlight";
import { MagicButtonProps } from "@/components/types/types";
import HeroButton from "./MagicButton/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import TextSection from "./TextSection/Textsection";

const ButtonProps: MagicButtonProps = {
  title: "About Me",
  icon: <FaLocationArrow className="w-6 h-6" />,
  position: "right",
  otherClasses: "hover:bg-slate-900",
}

const hero = () => {
  return (
    <div className="" id="home">
      {/* Spotlight Animations */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen " fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-40 left-80 h-[80vh] w-[50vw] " fill="lightblue" />

      {/* Background  */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
        {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextSection title="Live as if you were to die tomorrow. Learn as if you were to live forever." description="I’m a Full-Stack Developer based in New York City" />
          <a href="#about" className="p-5">
            <HeroButton props={ButtonProps} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
