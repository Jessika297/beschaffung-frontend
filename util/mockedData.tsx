import {JSXElementConstructor} from "react";

export const items = [
    {
        key: '1',
        artist: 4,
        image: 'https://assets.codepen.io/3685267/nft-dashboard-art-0.jpg',
        price: '3.8',
        title: 'People Abstract Painting',
        timeLeft: 84670923,
    },
    {
        key: '2',
        artist: 2,
        image: 'https://assets.codepen.io/3685267/nft-dashboard-art-1.jpg',
        price: '2.5',
        title: 'Abstract Art Painting',
        timeLeft: 12873491,
    },
    {
        key: '3',
        artist: 0,
        image: 'https://assets.codepen.io/3685267/nft-dashboard-art-2.jpg',
        price: '9.0',
        title: 'Purple Liquid Painting',
        timeLeft: 84720185,
    },
    {
        key: '4',
        artist: 3,
        image: 'https://assets.codepen.io/3685267/nft-dashboard-art-3.jpg',
        price: '16.5',
        title: 'Generative Art',
        timeLeft: 43826185,
    },
    {
        key: '5',
        artist: 2,
        image: 'https://assets.codepen.io/3685267/nft-dashboard-art-4.jpg',
        price: '4.0',
        title: 'Liquid Base Painting',
        timeLeft: 134627,
    },
    {
        key: '6',
        artist: 1,
        image: 'https://assets.codepen.io/3685267/nft-dashboard-art-5.jpg',
        price: '1.3',
        title: 'Colorful Wind Painting',
        timeLeft: 12008745,
    },
];
export const artists = [
    {
        name: 'Raven Simmons',
        handler: '@raven',
        image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg',
    },
    {
        name: 'Uriah Gardner',
        handler: '@uriah',
        image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-2.jpg',
    },
    {
        name: 'Colin Mitchell',
        handler: '@colin',
        image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-4.jpg',
    },
    {
        name: 'Emely Hall',
        handler: '@emely',
        image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-3.jpg',
    },
    {
        name: 'Raphael Scott',
        handler: '@raphael',
        image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-5.jpg',
    },
];

interface Icons {
    [key: string]: JSXElementConstructor<any>;
}


export const Icons: Icons= {
    market: () => (
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
    dashboard: () => (
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
    favourites: () => (
        <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
        />
    ),
    trending: () => (
        <path
            fillRule="evenodd"
            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
            clipRule="evenodd"
        />
    ),
    collection: () => (
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
    ),
    wallet: () => (
        <>
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
            />
        </>
    ),
    settings: () => (
        <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
        />
    ),
    logout: () => (
        <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
        />
    ),
};
