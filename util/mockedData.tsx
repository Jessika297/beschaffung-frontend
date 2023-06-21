import {IconDefinition} from '@fortawesome/free-solid-svg-icons'
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

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

interface IconConfig {
    icon: IconDefinition;
}

interface IconsConfig {
    [key: string]: IconConfig;
}

export const Icons: IconsConfig = {
    market: {
        icon: icon({ name: 'user-secret' })
    },
    dashboard: {
        icon: icon({ name: 'user-secret' })
    },
    favourites: {
        icon: icon({ name: 'user-secret' })
    },
    trending: {
        icon: icon({ name: 'twitter', style: 'brands' })
    },
    collection: {
        icon: icon({ name: 'user-secret' })
    },
    wallet: {
        icon: icon({ name: 'user-secret' })
    },
    settings: {
        icon: icon({ name: 'user-secret' })
    },
    logout: {
        icon: icon({ name: 'user-secret' })
    }
};
