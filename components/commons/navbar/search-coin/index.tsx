import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from 'context/CoinContext';
import { useQueryCryptoById } from 'hooks/useQueryCryptoById';
import { _storage } from 'utils/functions';
import { CoinFullInfo } from 'utils/types';

interface Props {
    coinList: CoinFullInfo[];
}

const SearchCoin = ({ coinList }: Props) => {
    const storageCoin = _storage.get('current-coin-id');
    const { coinState, updateCurrentCoin } = useContext(CoinContext);
    const [search, setSearch] = useState<string>('');
    const [selectedCoin, setSelectedCoin] = useState<string>(storageCoin);
    const [list, setList] = useState<boolean>(false);
    const { data } = useQueryCryptoById(selectedCoin);

    useEffect(() => {
        if (data) {
            updateCurrentCoin(data);
            setList(false);
            setSearch('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const filterData = coinList?.filter(
        (item: CoinFullInfo) => item.name && item.name.toLowerCase().includes(search.toLowerCase()),
    );

    useEffect(() => {
        if (search.length >= 3) setList(true);
        if (search.length < 3) setList(false);
    }, [search]);

    return (
        <>
            <div className='flex w-full flex-wrap items-stretch'>
                <span className='z-10 h-full leading-snug font-normal text-center text-gray-400 focus:text-white absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
                    <i className='fas fa-search'></i>
                </span>
                <div className='relative w-full'>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type='text'
                        value={search}
                        placeholder='Buscar moneda...'
                        className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:bg-red-100 w-full pl-10'
                    />
                    {list ? (
                        <div className='w-full absolute py-2 top-12 flex flex-col border-0 bg-white rounded text-sm shadow overflow-y-scroll'>
                            {filterData?.length !== 0 ? (
                                filterData?.map((item: CoinFullInfo) => (
                                    <span
                                        key={item.id}
                                        onClick={() => setSelectedCoin(`${item.id}`)}
                                        className='py-1 px-2 cursor-pointer hover:bg-houmBgRed hover:text-houmRed hover:border-collapse hover:text-lg'>
                                        {item.name}
                                    </span>
                                ))
                            ) : (
                                <span className='py-1 px-2 cursor-pointer hover:bg-houmBgRed hover:text-houmRed hover:border-collapse hover:text-lg'>
                                    No es posible obtener datos
                                </span>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default SearchCoin;
