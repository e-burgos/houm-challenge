import React from 'react';
import NavItem from '../navbar/nav-item';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='w-full'>
                    <hr className='border-b-1 border-gray-200'/>
                    <div className='flex flex-wrap items-center justify-center'>
                        <span className='text-sm text-gray-500 font-semibold py-1 text-center md:text-left'>
                            Copyright © {new Date().getFullYear()}{' '}
                        </span>

                        <NavItem
                            path={'https://github.com/e-burgos'}
                            externalUrl
                            name={'Esteban Burgos'}
                            icon={'fab fa-github'}
                            className=' list-none ml-6'
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}
