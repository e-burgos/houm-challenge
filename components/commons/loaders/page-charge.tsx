import React from 'react';

interface Props {
    path?: string;
}

export default function PageChange({ path }: Props) {
    return (
        <>
            <div className='top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50 bg-center'></div>
            <div className=' my-32 mx-auto max-w-sm text-center relative z-50 top-0'>
                <div className='block mb-4'>
                    <i className='fas mt-32 fa-circle-notch animate-spin text-white mx-auto text-5xl'></i>
                </div>
                <h4 className=' text-2xl font-medium text-white'>Cargando...</h4>
            </div>
        </>
    );
}
