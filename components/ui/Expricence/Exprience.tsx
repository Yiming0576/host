import { workExperience } from '@/data/data'
import React from 'react'
import { Button } from './MovingBorder'

const Exprience = () => {
    return (
        <div className='' id="exprience">
            <h1 className='heading'>
                My <span className='text-purple'> Work Exprience </span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-flow-cols-1 gap-10'>
                {
                    workExperience.map((exp, index) => (

                        <Button
                            key={exp.id}
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            className='flex-1 text-white-100 border-neutral-100 dark:border-slate-700'
                        >
                            <div className='flex lg:flex-grow flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                <img src={exp.thumbnail} alt={exp.thumbnail} className='lg:w-32 md:w-20 w-16' />
                            </div>
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {exp.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {exp.desc}
                                </p>
                            </div>
                        </Button>

                    ))
                }
            </div>
        </div>
    )
}

export default Exprience
