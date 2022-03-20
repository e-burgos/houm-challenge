import React, { useEffect, useState } from 'react';
import HeaderStats from 'components/commons/header';
import Image from 'next/image';
import { CoinFullInfo } from 'utils/types';
import { stringToHTML } from '../../../utils/functions';

type Props = {
    title?: string;
    data: CoinFullInfo;
};

export default function CardInfo({ title, data }: Props) {
    const [desc, setDesc] = useState<any>();

    useEffect(() => {
        if (data?.description?.es) setDesc(stringToHTML(data?.description?.es));
    }, [data]);

    return (
        <>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white'>
                <div className='rounded-t px-4 py-2 border-0 mt-2'>
                    <div className='flex items-center justify-between text-center'>
                        <h3 className={'font-bold text-xl  text-gray-500'}>{title}</h3>
                        <p className='font-bold text-xl uppercase text-lightBlue-600'>{data?.symbol}</p>
                    </div>
                </div>
                <div className='h-0 my-2 border border-solid border-gray-100' />
                <div className='flex flex-col px-6 py-6 mb-4 items-center justify-items-center'>
                    <div className='mb-8'>{desc}</div>
                    <div className='flex flex-row items-center  mb-8'>
                        <img
                            alt={data.id}
                            className='w-400 h-400 rounded-full border-none shadow-lg'
                            src={data.image ? data.image.large : '/images/coin-icon.png'}
                        />
                    </div>
                    <HeaderStats currentCoin={data}/>
                    <div className='w-full'>
                        <div className='flex xl:flex-row lg:flex-row flex-col w-full'>
                            <a
                                href={data.links?.repos_url?.github ? data?.links?.repos_url.github[0] : '#'}
                                className='w-full text-center mx-1 my-1 bg-gradient-to-tr from-houmHoverRed to-houmRed text-white py-2 rounded-md text-lg font-semibold'
                                target='_blank'
                                rel='noreferrer'>
                                Repositorio
                            </a>
                            <a
                                href={data?.links?.homepage ? data?.links?.homepage[0] : '#'}
                                className='w-full text-center mx-1 my-1 bg-gradient-to-tr from-houmHoverRed to-houmRed text-white py-2 rounded-md text-lg font-semibold'
                                target='_blank'
                                rel='noreferrer'>
                                Sitio Oficial
                            </a>
                        </div>
                        <div className='flex xl:flex-row lg:flex-row flex-col w-full'>
                            <a
                                href={data?.links?.official_forum_url ? data?.links?.official_forum_url[0] : '#'}
                                className='w-full text-center mx-1 my-1 bg-gradient-to-tr from-houmHoverRed to-houmRed text-white py-2 rounded-md text-lg font-semibold'
                                target='_blank'
                                rel='noreferrer'>
                                Foro Oficial
                            </a>
                            <a
                                href={data?.links?.blockchain_site ? data?.links?.blockchain_site[0] : '#'}
                                className='w-full text-center mx-1 my-1 bg-gradient-to-tr from-houmHoverRed to-houmRed text-white py-2 rounded-md text-lg font-semibold'
                                target='_blank'
                                rel='noreferrer'>
                                Tecnologia Blockchain
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
