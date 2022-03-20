import React, { useEffect, useState } from 'react';
import CardContainer from 'components/cards/card-container';
import Loader from 'components/commons/loaders/loader';
import useQueryCryptos from 'hooks/useQueryCryptos';
import { _storage } from 'utils/functions';
import CoinGallery from './coin-gallery';
import CoinTable from './coin-table';

export default function Content() {
    const pages: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemsPerPage: number[] = [0, 12, 24, 48, 100, 300];
    const [page, setPage] = useState<number>(_storage.get('page') ? _storage.get('page') : 0);
    const [count, setCount] = useState<number>(_storage.get('count') ? _storage.get('count') : 12);
    const [view, setView] = useState<string>(_storage.get('view') ? _storage.get('view') : 'gallery');
    const { data, isError, isLoading } = useQueryCryptos(page, count);

    useEffect(() => {
        _storage.set('page', page);
        _storage.set('count', count);
        _storage.set('view', view);
    });

    return (
        <>
            <div className='w-full'>
                <CardContainer className='bg-white'>
                    <div className='flex w-full xl:flex-row lg:flex-row flex-col'>
                        <div className='xl:w-1/3 lg:w-1/3 w-full mx-2 my-1 pr-4 lg:pr-0 xl:pr-0'>
                            <select
                                defaultValue={page}
                                className='w-full border-0 p-3 placeholder-gray-300 text-gray-600 bg-houmBgRed rounded text-sm shadow outline-none focus:outline-none focus:bg-red-100'
                                onChange={(e) => setPage(Number(e.target.value))}>
                                {pages?.map((item: number) => (
                                    <option key={item} value={item}>
                                        Página {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='xl:w-1/3 lg:w-1/3 w-full mx-2 my-1 pr-4 lg:pr-0 xl:pr-0'>
                            <select
                                defaultValue={count}
                                className='w-full border-0 p-3 placeholder-gray-300 text-gray-600 relative bg-houmBgRed rounded text-sm shadow outline-none focus:outline-none focus:bg-red-100'
                                onChange={(e) => setCount(Number(e.target.value))}>
                                {itemsPerPage?.map((item: number) => (
                                    <option key={item} value={item}>
                                        {item} Monedas
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='xl:w-1/3 lg:w-1/3 w-full mx-2 my-1 pr-4 lg:pr-0 xl:pr-0 flex flex-row'>
                            <button
                                className={`mr-2 px-3 w-full bg-gradient-to-tr hover:from-houmRed text-white rounded-md text-sm font-semibold ${view === 'table' ? 'from-houmHoverRed to-houmRed' : 'from-gray-400 to-gray-100'}`}
                                onClick={() => setView('table')}>
                                <i className='fas fa-table'></i> Tabla
                            </button>
                            <button
                                className={`px-3 w-full bg-gradient-to-tr hover:from-houmRed text-white rounded-md text-sm font-semibold ${view === 'gallery' ? 'from-houmHoverRed to-houmRed' : 'from-gray-400 to-gray-100'}`}
                                onClick={() => setView('gallery')}>
                                <i className='fas fa-images'></i> Galería
                            </button>
                        </div>
                    </div>
                </CardContainer>
            </div>
            {isError ? (
                <div className='w-full'>
                    <CardContainer className='bg-white text-center pb-4'>
                        <h1 className='uppercase mt-4 text-md font-semibold text-houmRed'>Upps, hubo un error...</h1>
                    </CardContainer>
                </div>
            ) : isLoading ? (
                <div className='w-full h-screen'>
                    <Loader text='Cargando...' />
                </div>
            ) : data ? (
                <>
                    {view === 'table' ? (
                        <CoinTable data={data} />
                    ) : view === 'gallery' ? (
                        <CoinGallery data={data} />
                    ) : null}
                </>
            ) : null}
        </>
    );
}
