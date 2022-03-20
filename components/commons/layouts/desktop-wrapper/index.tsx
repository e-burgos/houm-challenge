import React from 'react';
import Navbar from 'components/commons/navbar';
import Sidebar from 'components/commons/sidebar';
import Footer from 'components/commons/footer';
import HeaderStats from 'components/commons/header';
import { CoinFullInfo } from 'utils/types';

interface Props {
    children: React.ReactNode;
    pageTitle?: string;
    currentCoin?: CoinFullInfo;
    searchCoin?: boolean;
}

export default function DesktopWrapper({ children, pageTitle, currentCoin, searchCoin }: Props) {
    return (
        <>
            <div>
                <Sidebar />
                <div className='relative md:ml-64 bg-houmBgWhite'>
                    <Navbar pageTitle={pageTitle ? pageTitle : ''} searchCoin={searchCoin} />
                    <div className='relative bg-houmBgRed md:pt-32 pb-14 pt-12' />
                    <div className='px-4 md:px-10 mx-auto w-full -mt-24 -mb-24 bg-houmBgRed'>
                        {currentCoin && <HeaderStats currentCoin={currentCoin} />}
                    </div>
                    <div className='mt-14 px-8 h-full'>{children}</div>
                    <div className='h-72 bg-houmBgWhite'></div>
                </div>
            </div>
            <div className='md:ml-64 bottom-0 sticky bg-white'>
                <Footer />
            </div>
        </>
    );
}
