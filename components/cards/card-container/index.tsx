import React from 'react';

interface Props {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
}

export default function CardContainer({ children, title, subtitle, className }: Props) {
    return (
        <div
            className={`${
                className && className
            } relative flex flex-col break-words w-full mb-6 shadow-lg rounded-xl`}
        >
            <div className='rounded-t mb-0 bg-transparent'>
                <div className='flex flex-wrap items-center'>
                    <div className='relative w-full max-w-full flex-grow flex-1'>
                        <h6 className={`uppercase text-gray-400 mt-2 mb-1 text-xs font-semibold ${!subtitle && 'hidden'}`}>
                            {subtitle}
                        </h6>
                        <h2 className={`text-gray-700 text-lg ${!subtitle && 'mt-4'} font-bold ${!title && 'hidden'}`}>{title}</h2>
                    </div>
                </div>
            </div>
            
                <div className='p-4 relative h-full'>{children}</div>
            
        </div>
    );
}
