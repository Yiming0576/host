"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data/data";
import Image from "next/image";


const sendEmail = () => {
    console.log("Button clicked!"); // Check if this logs when button is clicked

    window.location.href = "mailto:Yiming0576@gmail.com";
};

const ButtonData = {
    title: "Let's get in touch",
    icon: <FaLocationArrow />,
    position: "right",
    handleClick: sendEmail,
};

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-3 relative" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Getting  to know <span className="text-purple">Me?</span> 
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center font-writing2">
                    Reach out to me today and let&apos;s discuss how we can work together to build something amazing.
                </p>

                {/* <ShimmerButton {...ButtonData} /> */}

                {/* Button for sending email */}
                <div 
                    onClick={sendEmail} 
                    className="inline-flex h-12 animate-shimmer rounded-full items-center justify-center border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "

                >
                    <span className="mr-2">{ButtonData.title}</span>
                    {ButtonData.icon}

                </div>

                {/* Uncomment this line if you want to keep the ShimmerButton */}
                {/* <ShimmerButton {...ButtonData} /> */}
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light pb-4 sm:pb-4 xs:pb-2">
                    Copyright © 2024 Yiming
                </p>

                <div className="flex items-center md:gap-3 gap-6 md:pt-4 sm:pt-4 pt-2">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <a href={info.link}>
                                <Image src={info.img} alt="icons" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
