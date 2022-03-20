import React, { useContext } from 'react';
import SearchCoin from './search-coin';
import CoinDropdown from './coin-dropdown';
import { CoinContext } from 'context/CoinContext';

interface Props {
    pageTitle?: string;
    searchCoin?: boolean;
}

export default function Navbar({ pageTitle, searchCoin }: Props) {
    const { coinState } = useContext(CoinContext);

    return (
        <>
            <nav className='absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4'>
                <div className='w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
                    <span className='text-lg uppercase text-houmRed hidden lg:inline-block font-semibold'>
                        {pageTitle ? pageTitle : 'Dashboard'}
                    </span>
                    {searchCoin && (
                        <div className='md:flex hidden flex-col w-6/12  items-center lg:ml-auto mr-3'>
                            <SearchCoin coinList={coinState.coinList} />
                        </div>
                    )}
                    <ul className='flex-col md:flex-row list-none items-center hidden md:flex'>
                        <CoinDropdown 
                            image={coinState.currentCoin.image ? coinState.currentCoin.image : {small: '/images/coin-icon.png'}} 
                            links={coinState.currentCoin.links} 
                            id={coinState.currentCoin.id ? coinState.currentCoin.id : 'bitcoin'} />
                    </ul>
                </div>
            </nav>
        </>
    );
}
