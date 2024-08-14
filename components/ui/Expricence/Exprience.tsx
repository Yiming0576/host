import { workExperience } from '@/data/data'
import { button } from '@material-tailwind/react'
import React from 'react'

const Exprience = () => {
    return (
        <div className='' id="exprience">
            <h1 className='heading'>
                My <span className='text-purple'> Work Exprience </span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-flow-cols-1 gap-10'>
                {
                    workExperience.map((exp, index) => (

                        <button>
                            
                        </button>

                    ))
                }
            </div>
        </div>
    )
}

export default Exprience
