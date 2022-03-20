import { createContext } from "react";
import { CoinFullInfo, CoinState } from "utils/types";

export type CoinContextProps = {
    coinState: CoinState;
    updateCurrentCoin: (data: CoinFullInfo) => void;
    updateCoinList: (data: CoinFullInfo[]) => void;
};

export const CoinContext = createContext<CoinContextProps>({} as CoinContextProps);