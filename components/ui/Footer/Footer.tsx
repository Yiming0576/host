"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data/data";
import ShimmerButton from "@/components/ui/Footer/ShimmerButton";

const sendEmail = () => {
    console.log("email sent"); // Log before redirect
    window.location.href = "mailto:Yiming0576@gmail.com";
};

const ButtonData = {
    title: "Let's get in touch",
    icon: <FaLocationArrow />,
    position: "right",
    handleClick: sendEmail, // Ensure it's correctly named
};

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-3" id="contact">
            {/* Background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Getting  to know <span className="text-purple">Me?</span> 
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center font-writing2">
                    Reach out to me today and let&apos;s discuss how we can work together to build something amazing.
                </p>

                <ShimmerButton {...ButtonData} />
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
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
