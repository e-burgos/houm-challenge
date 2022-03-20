import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href='/' passHref>
            <div className='relative flex flex-col items-center justify-center md:mt-2 cursor-pointer'>
                <Image src='/images/houmLogo.svg' width='200px' height='70px' alt='logo' />
                <p className='absolute text-xl text-black'>Cryptos</p>
            </div>
        </Link>
    );
};

export default Logo;
