import CardContainer from 'components/cards/card-container';
import CardStats from 'components/cards/card-stats';
import { CoinContext } from 'context/CoinContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { CoinFullInfo } from 'utils/types';

interface Props {
    data: CoinFullInfo;
}

export default function CoinTable({ data }: Props) {
    const router = useRouter();
    const { updateCurrentCoin } = useContext(CoinContext);

    const handleCardClick = (coin: CoinFullInfo) => {
        updateCurrentCoin(coin);
        router.push(`/coins/${coin.id}?id=${coin.id}`);
    };

    return (
        <>
            {!data || data.length === 0 ? (
                <div className='w-full'>
                    <CardContainer className='bg-white text-center pb-4'>
                        <h1 className='uppercase text-gray-400 mt-4 text-md font-semibold'>Sin datos disponibles</h1>
                    </CardContainer>
                </div>
            ) : data ? (
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl py-2 bg-white'>
                    <div className='block w-full overflow-x-auto'>
                        <table className='items-center w-full bg-transparent border-collapse'>
                            <thead>
                                <tr>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        Moneda
                                    </th>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        Opciones
                                    </th>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        Precio Actual
                                    </th>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        Mayor 24hs
                                    </th>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        Menor 24hs
                                    </th>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        % Caída máx.
                                    </th>
                                    <th
                                        className={
                                            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100'
                                        }>
                                        % Cambio Precio
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((coin: CoinFullInfo) => (
                                    <tr key={coin.id}>
                                        <td className='border-t-0 px-6 mr-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                                            <img
                                                src={coin.image ? `${coin.image}` : '/images/coin-icon.png'}
                                                className='h-12 w-12 bg-white rounded-full border'
                                                alt={coin.id}
                                            />{' '}
                                            <span className={'ml-3 font-bold text-gray-600'}>{coin.name}</span>
                                        </td>
                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                                            <button
                                                className='w-full hover:from-houmRed bg-gradient-to-tr from-houmHoverRed to-houmRed text-white p-1 rounded-md text-sm font-semibold'
                                                onClick={() => handleCardClick(coin)}>
                                                Info Completa
                                            </button>
                                        </td>
                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                                            ${coin.current_price} USD
                                        </td>
                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                                            <i className='fas fa-circle text-teal-500 mr-2'></i> ${coin.high_24h} USD
                                        </td>
                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                                            <i className='fas fa-circle text-red-500 mr-2'></i> ${coin.low_24h} USD
                                        </td>
                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                                            <div className='flex items-center'>
                                                <span className='mr-2'>{coin.ath_change_percentage.toFixed(2)}%</span>
                                                <div className='relative w-full'>
                                                    <div className='overflow-hidden h-2 text-xs flex rounded bg-gray-200'>
                                                        <div
                                                            style={{
                                                                width: `${
                                                                    coin.ath_change_percentage < 0
                                                                        ? (-coin.ath_change_percentage).toFixed(0)
                                                                        : coin.ath_change_percentage.toFixed(0)
                                                                }% `,
                                                            }}
                                                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
                                                                ${
                                                                    coin.ath_change_percentage < 0
                                                                        ? 'bg-red-500'
                                                                        : 'bg-teal-500'
                                                                }`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                                            <div className='flex items-center'>
                                                <span className='mr-2'>
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                                <div className='relative w-full'>
                                                    <div className='overflow-hidden h-2 text-xs flex rounded bg-gray-200'>
                                                        <div
                                                            style={{
                                                                width: `${
                                                                    coin.price_change_percentage_24h < 0
                                                                        ? (-coin.price_change_percentage_24h).toFixed(0)
                                                                        : coin.price_change_percentage_24h.toFixed(0)
                                                                }% `,
                                                            }}
                                                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
                                ${coin.price_change_percentage_24h < 0 ? 'bg-red-500' : 'bg-teal-500'}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : null}
        </>
    );
}
