"use client";

import React from 'react';
import { projects } from '@/data/data';
import { PinContainer } from '@/components/ui/Projects/PinContainer';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='pb-10' id="projects">
            <h2 className='heading'>
                <span className='text-violet-300'>Projects Outline</span>
            </h2>
            <div className='flex flex-wrap items-center justify-center p-5 gap-12'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='lg:min-h-[35.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]'>
                                <Image src="/bg.png" alt='Background Image' height={400} width={400} />
                                <Image
                                    src={img}
                                    alt={`${title} project image`}
                                    width={400}
                                    height={400}
                                    className='absolute z-10 bottom-0'
                                />
                            </div>
                            <h1 className='text-center pt-5 font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-indigo-700'>
                                {title}
                            </h1>
                            <p className='text-center pt-1 lg:text-xl font-light text-sm line-clamp-3 text-fuchsia-200'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div 
                                            key={`${icon}-${index}`} // Ensure unique key
                                            className='border border-white/[0.1] rounded-sm bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{
                                                transform: `rotate(${index * 20}deg)`
                                            }}
                                        >
                                            <Image src={icon} alt={icon} height={600}  width={600} className='p-2 rounded-sm' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex items-center border border-white/[0.1] rounded-full p-1'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-violet-300'>Go Live</p>
                                    <FaLocationArrow className='ms-3 text-violet-300' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
