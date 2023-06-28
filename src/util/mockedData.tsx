import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faArrowTrendUp,
    faGear,
    faGift,
    faHouse,
    faStar,
    faStore,
    faWallet,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import {ReactElement} from "react";

interface Item {
    key: string;
    processor: string;
    storage: number;
    storageType: string;
    price: number;
    sale: boolean;
    salePrice: number | null;
    title: string;
    saleUntil: Date;
}

export const items: Item[] = [
    {
        key: '1',
        processor: 'Intel i3',
        storage: 256,
        storageType: 'SSD',
        price: 899,
        sale: true,
        salePrice: 799,
        title: 'Fujitsu Esprimo Q920',
        saleUntil: new Date(2023, 6, 1),
    },
    {
        key: '2',
        processor: 'Intel i5',
        storage: 128,
        storageType: 'HDD',
        price: 659,
        sale: false,
        salePrice: 23,
        title: 'Toshiba Libretto U100',
        saleUntil: new Date(2023, 6, 2),
    },
    {
        key: '3',
        processor: 'AMD Ryzen 3',
        storage: 256,
        storageType: 'HDD',
        price: 999,
        sale: true,
        salePrice: 995,
        title: 'Chieftec LG-01B-OP',
        saleUntil: new Date(2023, 5, 30),
    },
    {
        key: '4',
        processor: 'AMD Ryzen 5',
        storage: 1028,
        storageType: 'HDD',
        price: 1999,
        sale: false,
        salePrice: 55,
        title: 'Geekom Mini Air',
        saleUntil: new Date(2023, 6, 4),
    },
    {
        key: '5',
        processor: 'Intel i3',
        storage: 8,
        storageType: 'SSD',
        price: 2999,
        sale: true,
        salePrice: 99,
        title: 'AZZA Pyramid 804',
        saleUntil: new Date(2023, 6, 2),
    },
    {
        key: '6',
        processor: 'Intel i3',
        storage: 256,
        storageType: 'SSD',
        price: 999,
        sale: true,
        salePrice: 759,
        title: 'Alienware Aurora R15',
        saleUntil: new Date(2023, 5, 29),
    },
];

interface IconInterface {
    [key: string]: ReactElement;
}

export const Icons: IconInterface = {
    market: <FontAwesomeIcon icon={faStore}/>,
    dashboard: <FontAwesomeIcon icon={faHouse}/>,
    favourites: <FontAwesomeIcon icon={faStar}/>,
    trending: <FontAwesomeIcon icon={faArrowTrendUp}/>,
    sale: <FontAwesomeIcon icon={faGift}/>,
    wallet: <FontAwesomeIcon icon={faWallet}/>,
    settings: <FontAwesomeIcon icon={faGear}/>,
    logout: <FontAwesomeIcon icon={faArrowRightFromBracket}/>,
    close: <FontAwesomeIcon icon={faXmark}/>
};


