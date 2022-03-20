import React from 'react';

type Props = {
    text?: string;
};

export default function Loader({ text }: Props) {
    return (
        <div className='div-loader' id='container-loader'>
            <svg viewBox='0 0 100 100'>
                <defs>
                    <filter id='shadow'>
                        <feDropShadow dx='0' dy='0' stdDeviation='1.5' floodColor='#FF5000' />
                    </filter>
                </defs>
                <circle id='spinner-loader' className='svg-loader' cx='50' cy='50' r='45' />
            </svg>
            <h2 className='font-semibold text-xl text-gray-600'>{text}</h2>
        </div>
    );
}
