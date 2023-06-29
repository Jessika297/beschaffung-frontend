import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBellConcierge,
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
    graphicsFull: string;
    graphicsType: string;
    key: string;
    memory: string;
    moreInfo: string;
    picture: string;
    power: string;
    price: number;
    processor: string;
    processorFull: string;
    salePrice: null | number;
    saleUntil: null | Date;
    storage: string;
    storageFull: string;
    storageType: string;
    title: string;
}

export const items: Item[] = [
    {
        graphicsFull: 'HD Graphics 4600',
        graphicsType: 'Intel',
        key: '1',
        memory: '16 GB',
        moreInfo: 'best PC ever',
        picture: '/one.png',
        power: '',
        price: 139,
        processor: 'Intel i5',
        processorFull: 'Core i5-4590T',
        salePrice: 122,
        saleUntil: new Date(2023, 6, 1),
        storage: '500 GB',
        storageFull: '',
        storageType: 'SSD',
        title: 'Fujitsu Esprimo Q920',
    },
    {
        graphicsFull: 'Intel Extreme Graphics 2 - 64 MB VRAM',
        graphicsType: 'Intel',
        key: '2',
        memory: '0 GB',
        moreInfo: 'In äußerst leichtem und kompaktem Design vereint das edel anmutende Gerät Funktionalität und Performance eines großformatigen Notebooks auf kleinstem Raum.',
        picture: '/two.png',
        power: '4.5h Akkulaufzeit',
        price: 5,
        processor: 'Intel Pentium',
        processorFull: 'Intel Pentium M 753 1 x 1.2 GHz, Dothan',
        salePrice: 0,
        saleUntil: new Date(2023, 6, 1),
        storage: '0 GB',
        storageFull: '',
        storageType: 'HDD',
        title: 'Toshiba Libretto U100',
    },
    {
        graphicsFull: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        graphicsType: 'NVIDIA®',
        key: '3',
        memory: '16 GB',
        moreInfo: 'jupp auch nur ein Gehäuse',
        picture: '/three.png',
        power: '',
        price: 899,
        processor: 'Intel i3',
        processorFull: '',
        salePrice: 799,
        saleUntil: new Date(2023, 6, 1),
        storage: '256 GB',
        storageFull: '',
        storageType: 'SSD',
        title: 'Chieftec LG-01B-OP',
    },
    {
        graphicsFull: 'Intel®UHD-Grafik 605 Unterstützung für 4K UHD-Displays',
        graphicsType: 'Intel®UHD-Grafik',
        key: '4',
        memory: '32 GB',
        moreInfo: 'Der MiniAir 11 Mini-PC bietet zuverlässige Leistung und ultrakompaktes Design für eine Vielzahl von Anwendungen wie tägliche Arbeit, Online-Lernen, Heimgebrauch und mehr.',
        picture: '/four.png',
        power: 'Automatische Spannungsanpassung zwischen 100 und 240V AC, 50/60Hz, 3Pin, 45Watt(19V/2.36A), 1,5 Meter Läng',
        price: 299,
        processor: 'Intel® Quad-Core',
        processorFull: 'Intel® Quad-Core Celeron N5095 der 11. Generation',
        salePrice: 159,
        saleUntil: new Date(2023, 6, 1),
        storage: '1 TB',
        storageFull: 'Bis zu 1 TB M.2 2280 SATA/PCIe SSD',
        storageType: 'SSD',
        title: 'GEEKOM MiniAir 11',
    },
    {
        graphicsFull: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        graphicsType: 'NVIDIA®',
        key: '5',
        memory: '16 GB',
        moreInfo: 'das ist eigentlich nur ein gehäuse, ist aber fancy',
        picture: '/five.png',
        power: '',
        price: 259,
        processor: 'Intel i3',
        processorFull: '',
        salePrice: null,
        saleUntil: null,
        storage: '256 GB',
        storageFull: '',
        storageType: 'SSD',
        title: 'AZZA Pyramid 804, Bench/Show-Gehäuse',
    },
    {
        graphicsFull: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        graphicsType: 'NVIDIA®',
        key: '6',
        memory: '16 GB Dual Channel DDR5, 2 x 8 GB, bei 4.800 MT/s; bis zu 64 GB, zusätzlicher Arbeitsspeicher separat erhältlich',
        moreInfo: 'Unsere interne Architektur unterstützt mehr Power und höhere Wattleistung. Von der Anordnung der Kühlungskomponenten, der Neupositionierung der Grafikkarte bis zum Layout der UDIMM-Steckplätze – wir haben alles getan, damit Geschwindigkeit, Performance und Gameplay an erster Stelle stehen.',
        picture: '/six.png',
        power: '750 W PSU, in der Farbe „Dark Side of the Moon“, flüssigkeitsgekühlte CPU und solide Seitenabdeckung',
        price: 2099,
        processor: 'Intel i7',
        processorFull: 'Intel® Core™ i7-13700KF der 13. Generation (54 MB Cache, 16 Cores, 3,4 GHz bis 5,4 GHz Turbo)',
        salePrice: 1799,
        saleUntil: new Date(2023, 6, 1),
        storage: '1 TB',
        storageFull: '1-TB-M.2-PCIe-NVMe-SSD',
        storageType: 'SSD',
        title: 'Alienware Aurora R15',
    },
];

interface IconInterface {
    [key: string]: ReactElement;
}

export const Icons: IconInterface = {
    market: <FontAwesomeIcon icon={faStore}/>,
    dashboard: <FontAwesomeIcon icon={faHouse}/>,
    favourites: <FontAwesomeIcon icon={faStar}/>,
    service: <FontAwesomeIcon icon={faBellConcierge}/>,
    sale: <FontAwesomeIcon icon={faGift}/>,
    wallet: <FontAwesomeIcon icon={faWallet}/>,
    settings: <FontAwesomeIcon icon={faGear}/>,
    logout: <FontAwesomeIcon icon={faArrowRightFromBracket}/>,
    close: <FontAwesomeIcon icon={faXmark}/>
};


