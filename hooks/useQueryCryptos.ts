import { CoinFullInfo } from "utils/types";
import { useGlobalQuery } from "./useGlobalQuery";

export default function useQueryCryptos(page: number, count: number, key?: string[], cacheTime?: number) {
    const url = `https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=${page}&per_page=${count}&order=market_cap_desc`
    const query = useGlobalQuery<CoinFullInfo[]>(key ? key : ['cryptos', `${page}`, `${count}`], url, cacheTime);
    return query;
};



