
import { useReducer } from "react";
import { BITCOIN } from "utils/consts";
import { CoinFullInfo, CoinState } from "utils/types";
import { CoinContext } from "./CoinContext";
import { coinReducer } from "./coinReducer";

const INITIAL_STATE: CoinState = {
    currentCoin: BITCOIN,
    coinList: [BITCOIN]
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const CoinProvider = ({children}: Props) => {

    const [coinState, dispatch] = useReducer(coinReducer, INITIAL_STATE);

    const updateCurrentCoin = (data: CoinFullInfo): void => {
        dispatch({
            type: 'updateCoin',
            payload: data
        })
    };

    const updateCoinList = (data: CoinFullInfo[]): void => {
        dispatch({
            type: 'updateCoinList',
            payload: data
        })
    };

    return(
        <CoinContext.Provider value={{
            coinState,
            updateCurrentCoin,
            updateCoinList
        }}>
            {children}
        </CoinContext.Provider>
    )
}