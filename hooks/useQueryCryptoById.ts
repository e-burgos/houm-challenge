import { CoinFullInfo } from "utils/types";
import { useGlobalQuery } from "./useGlobalQuery";

export function useQueryCryptoById(id: string) {
    const url = `https://coingecko.p.rapidapi.com/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`
    const query = useGlobalQuery<CoinFullInfo>(['cryptos', `${id}`], url);
    const allLinks = query.data?.links;
    const images = query.data?.image;
    const data = query.data;
    const isLoading = query.isLoading;
    const isError = query.isError;
    return { data, isLoading, images, isError, allLinks,  };
};


