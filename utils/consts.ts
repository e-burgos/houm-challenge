import { CoinFullInfo } from "./types";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URI;
export const API_TOKEN_RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

export const MINUTE_IN_MILISECONDS = 60000;
export const HOUR_IN_MILISECONDS = MINUTE_IN_MILISECONDS * 60;
export const DAY_IN_MILISECONDS = HOUR_IN_MILISECONDS * 24;

export const BITCOIN: CoinFullInfo = {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    asset_platform_id: null,
    block_time_in_minutes: 10,
    hashing_algorithm: 'SHA-256',
    categories: ['Cryptocurrency'],
    public_notice: null,
    additional_notices: [],
    description: {
        en: 'Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href="https://www.coingecko.com/en/coins/litecoin">Litecoin</a>, <a href="https://www.coingecko.com/en/coins/peercoin">Peercoin</a>, <a href="https://www.coingecko.com/en/coins/primecoin">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a> which led to the development of other amazing projects such as <a href="https://www.coingecko.com/en/coins/eos">EOS</a>, <a href="https://www.coingecko.com/en/coins/tron">Tron</a>, and even crypto-collectibles such as <a href="https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos">CryptoKitties</a>.',
        es: '',
    },
    links: {
        homepage: ['http://www.bitcoin.org', '', ''],
        blockchain_site: [
            'https://blockchair.com/bitcoin/',
            'https://btc.com/',
            'https://btc.tokenview.com/',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ],
        official_forum_url: ['https://bitcointalk.org/', '', ''],
        chat_url: ['', '', ''],
        announcement_url: ['', ''],
        twitter_screen_name: 'bitcoin',
        facebook_username: 'bitcoins',
        telegram_channel_identifier: '',
        subreddit_url: 'https://www.reddit.com/r/Bitcoin/',
        repos_url: {
            github: ['https://github.com/bitcoin/bitcoin', 'https://github.com/bitcoin/bips'],
            bitbucket: [],
        },
    },
    image: {
        thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
        small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
        large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    },
    country_origin: '',
    genesis_date: '2009-01-03',
    market_cap_rank: 1,
    coingecko_rank: 1,
    coingecko_score: 81.807,
    developer_score: 98.918,
    community_score: 77.788,
    liquidity_score: 99.751,
    public_interest_score: 0.28,
    community_data: {
        facebook_likes: null,
        twitter_followers: 4844611,
        reddit_average_posts_48h: 6.5,
        reddit_average_comments_48h: 568.9,
        reddit_subscribers: 4011059,
        reddit_accounts_active_48h: 1544,
    }
};
