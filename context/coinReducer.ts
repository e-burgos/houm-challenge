import { _storage } from "utils/functions";
import { CoinFullInfo, CoinState } from "utils/types";

type CoinAction = 
    | {type: 'updateCoin', payload: CoinFullInfo}
    | {type: 'updateCoinList', payload: CoinFullInfo[]};

export const coinReducer = (state: CoinState, action: CoinAction): CoinState => {
    switch(action.type) {
        case 'updateCoin':
            _storage.set('current-coin-id', action.payload.id);
            return{
                ...state,
                currentCoin: action.payload
            };
        case 'updateCoinList':
            return{
                ...state,
                coinList: action.payload
            }
        default:
            return state;
    }
}