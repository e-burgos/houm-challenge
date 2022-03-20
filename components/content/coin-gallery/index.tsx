import CardContainer from 'components/cards/card-container';
import CardStats from 'components/cards/card-stats';
import { CoinContext } from 'context/CoinContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { CoinFullInfo } from 'utils/types';

interface Props {
    data: CoinFullInfo;
}

export default function CoinGallery({ data }: Props) {
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
                <div className='flex flex-wrap'>
                    {data.map((coin: CoinFullInfo) => (
                        <div key={coin.id} className='xl:w-4/12 lg:w-6/12 md:w-full sm:w-full w-full px-2'>
                            <div className=' pt-4 px-8 bg-white shadow-lg rounded-lg mt-20'>
                                <div className='flex justify-center md:justify-end -mt-16'>
                                    <img
                                        alt='coin image'
                                        className='w-20 h-20 object-cover rounded-full border-2 border-gray-200'
                                        src={coin.image ? `${coin.image}` : '/images/coin-icon.png'}
                                    />
                                </div>
                                <div>
                                    <h2 className='text-gray-800 text-3xl font-semibold'>{coin.name}</h2>
                                    <p className='mt-2 text-gray-600'>{coin.genesis_date}</p>
                                </div>
                                <CardStats
                                    className='bg-white'
                                    statSubtitle='Precio Actual'
                                    statTitle={coin.current_price ? `$${coin.current_price.toFixed(2)}` : 'Sin datos'}
                                    statArrow={
                                        coin.price_change_percentage_24h !== undefined &&
                                        coin.price_change_percentage_24h < 0
                                            ? 'down'
                                            : 'up'
                                    }
                                    statPercent={
                                        coin.price_change_percentage_24h
                                            ? `${coin.price_change_percentage_24h.toFixed(2)} USD`
                                            : 'Sin datos'
                                    }
                                    statPercentColor={
                                        coin?.price_change_percentage_24h !== undefined &&
                                        coin?.price_change_percentage_24h < 0
                                            ? 'text-houmRed'
                                            : 'text-emerald-500'
                                    }
                                    statDescripiron='Cambio de precio en 24hs'
                                    statIconName='text-gray-400 fas fa-funnel-dollar'
                                    statIconColor='bg-houmBgRed'
                                />
                                <button
                                    className='w-full mt-4 mb-4 hover:from-houmRed bg-gradient-to-tr from-houmHoverRed to-houmRed text-white py-2 rounded-md text-lg font-semibold'
                                    onClick={() => handleCardClick(coin)}>
                                    Consultar Información
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
}
