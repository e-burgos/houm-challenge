import { useContext, useEffect } from 'react';
import DesktopWrapper from 'components/commons/layouts/desktop-wrapper';
import Content from 'components/content';
import type { NextPage } from 'next';
import useQueryCryptos from '../../hooks/useQueryCryptos';
import { CoinContext } from 'context/CoinContext';
import { BITCOIN } from 'utils/consts';

const Coins: NextPage = () => {
    const { data, isError } = useQueryCryptos(1, 300, ['initialCoinList']);
    const { coinState, updateCoinList } = useContext(CoinContext);
    useEffect(() => {
        if (isError) updateCoinList([BITCOIN]);
        if (data) {
            updateCoinList(data);
        }
        // eslint-disable-next-line
    }, [data]);

    return (
        <DesktopWrapper 
            pageTitle={`${coinState.currentCoin.name}`} 
            currentCoin={coinState.currentCoin} 
            searchCoin
        >
            <Content />
        </DesktopWrapper>
    );
};

export default Coins;
