import React, { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import DesktopWrapper from 'components/commons/layouts/desktop-wrapper';
import { useQueryCryptoById } from 'hooks/useQueryCryptoById';
import { _storage } from 'utils/functions';
import { CoinContext } from 'context/CoinContext';
import Loader from 'components/commons/loaders/loader';
import CardInfo from 'components/cards/card-info';

const ProviderPage: NextPage = () => {
    const router = useRouter();
    const queryId = router.query.id;
    const storageCoin = _storage.get('current-coin-id');
    const { coinState, updateCurrentCoin } = useContext(CoinContext);
    const { data, isLoading } = useQueryCryptoById(queryId !== undefined ? queryId : storageCoin);

    useEffect(() => {
        if (data) updateCurrentCoin(data);
        // eslint-disable-next-line
    }, [data]);

    return (
        <>
            <DesktopWrapper pageTitle={`${coinState.currentCoin.name}`}>
                {isLoading ? (
                    <Loader text={'Cargando...'} />
                ) : data ? (
                    <div className='flex flex-wrap mt-4'>
                        <div className='w-full mb-12'>
                            <CardInfo title={`Información General de ${data.name}`} data={data} />
                        </div>
                    </div>
                ) : null}
            </DesktopWrapper>
        </>
    );
};

export default ProviderPage;
