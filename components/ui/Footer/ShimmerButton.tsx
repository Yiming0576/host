import { MagicButtonProps } from '@/components/types/types';
import React from 'react';

const ShimmerButton = ({ title, icon, position, handleClick }: MagicButtonProps) => {
    return (
        <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={handleClick} // Directly use handleClick
        >
            {position === 'left' && icon}
            <span>{title}</span>
            {position === 'right' && icon}
        </button>
    );
};

export default ShimmerButton;
