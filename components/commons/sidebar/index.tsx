import React, { useContext, useEffect } from 'react';
import Logo from 'components/commons/logo';
import SearchCoin from 'components/commons/navbar/search-coin';
import NavItem from 'components/commons/navbar/nav-item';
import CoinDropdown from 'components/commons/navbar/coin-dropdown';
import { CoinContext } from 'context/CoinContext';

export default function Sidebar() {
    const { coinState } = useContext(CoinContext);
    const [collapseShow, setCollapseShow] = React.useState('hidden');

    useEffect(() => {
        setCollapseShow('hidden')
    }, [coinState])

    return (
        <>
            <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
                <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
                    <button
                        className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                        type='button'
                        onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}>
                        <i className='fas fa-bars'></i>
                    </button>
                    <Logo />
                    <ul className='md:hidden items-center flex flex-wrap list-none'>
                        <li className='inline-block relative'>
                            <CoinDropdown 
                                image={coinState.currentCoin.image ? coinState.currentCoin.image : {small: '/images/coin-icon.png'}} 
                                links={coinState.currentCoin.links} 
                                id={coinState.currentCoin.id ? coinState.currentCoin.id : 'bitcoin'}
                            />
                        </li>
                    </ul>
                    <div
                        className={
                            'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
                            collapseShow
                        }>
                        <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200'>
                            <div className='flex flex-wrap'>
                                <div className='w-6/12'>
                                    <Logo />
                                </div>
                                <div className='w-6/12 flex justify-end'>
                                    <button
                                        type='button'
                                        className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                                        onClick={() => setCollapseShow('hidden')}>
                                        <i className='fas fa-times'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 mb-4 md:hidden'>
                            <SearchCoin coinList={coinState.coinList} />
                        </div>
                        <hr className='my-4 md:min-w-full' />
                        <h6 className='md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                            Menu
                        </h6>
                        <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                            <NavItem path={'/coins'} name={'Monedas'} icon={'fas fa-star'} />
                        </ul>
                        <hr className='my-4 md:min-w-full' />
                        <h6 className='md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                            Desarrollador
                        </h6>
                        <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                            <NavItem
                                path={'https://github.com/e-burgos'}
                                externalUrl
                                name={'Github'}
                                icon={'fab fa-github'}
                            />
                            <NavItem
                                path={'https://estebanburgos.com.ar'}
                                externalUrl
                                name={'Website'}
                                icon={'fa fa-globe'}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
