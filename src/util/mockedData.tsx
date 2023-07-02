import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBellConcierge,
    faCircleInfo,
    faGear,
    faGift,
    faHouse,
    faStore,
    faWallet,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import {ReactElement} from "react";

interface Datenbankschema {
    graphicsDescription: string;
    graphicsName: string;
    id: string;
    ramSize: string;
    moreInfo: string;
    pictureURL: string;
    powerAdapterName: string;
    powerAdapterConsumption: string;
    price: number;
    processorName: string;
    processorDescription: string;
    salePrice: null | number;
    saleUntil: null | Date;
    storageSize: string;
    storageDescription: string;
    storageType: string;
    itemTitle: string;
    isAvailable: boolean;
}

export const items: Datenbankschema[] = [
    {
        graphicsDescription: 'HD Graphics 4600',
        graphicsName: 'Intel',
        id: '1',
        ramSize: '16 GB',
        moreInfo: 'best PC ever',
        pictureURL: '/one.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '65 W',
        price: 139,
        processorName: 'Intel i5',
        processorDescription: 'Core i5-4590T',
        salePrice: 122,
        saleUntil: new Date(2023, 6, 1),
        storageSize: '500 GB',
        storageDescription: 'SATA HDD',
        storageType: 'SSD',
        itemTitle: 'Fujitsu Esprimo Q920',
        isAvailable: false,
    },
    {
        graphicsDescription: 'Intel Extreme Graphics 2 - 64 MB VRAM',
        graphicsName: 'Intel',
        id: '2',
        ramSize: '0 GB',
        moreInfo: 'In äußerst leichtem und kompaktem Design vereint das edel anmutende Gerät Funktionalität und Performance eines großformatigen Notebooks auf kleinstem Raum.',
        pictureURL: '/two.png',
        powerAdapterName: '4.5h Akkulaufzeit',
        powerAdapterConsumption: '30 W',
        price: 5,
        processorName: 'Intel Pentium',
        processorDescription: 'Intel Pentium M 753 1 x 1.2 GHz, Dothan',
        salePrice: 0,
        saleUntil: new Date(2023, 6, 1),
        storageSize: '0 GB',
        storageDescription: 'IDE HDD',
        storageType: 'HDD',
        itemTitle: 'Toshiba Libretto U100',
        isAvailable: true,
    },
    {
        graphicsDescription: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        graphicsName: 'NVIDIA®',
        id: '3',
        ramSize: '16 GB',
        moreInfo: 'jupp auch nur ein Gehäuse',
        pictureURL: '/three.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '120 W',
        price: 899,
        processorName: 'Intel i3',
        processorDescription: 'Intel Core i3',
        salePrice: 799,
        saleUntil: new Date(2023, 6, 1),
        storageSize: '256 GB',
        storageDescription: 'NVMe SSD',
        storageType: 'SSD',
        itemTitle: 'Chieftec LG-01B-OP',
        isAvailable: true,
    },
    {
        graphicsDescription: 'Intel®UHD-Grafik 605 Unterstützung für 4K UHD-Displays',
        graphicsName: 'Intel®UHD-Grafik',
        id: '4',
        ramSize: '32 GB',
        moreInfo: 'Der MiniAir 11 Mini-PC bietet zuverlässige Leistung und ultrakompaktes Design für eine Vielzahl von Anwendungen wie tägliche Arbeit, Online-Lernen, Heimgebrauch und mehr.',
        pictureURL: '/four.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '65 W',
        price: 299,
        processorName: 'Intel® Quad-Core',
        processorDescription: 'Intel® Quad-Core Celeron N5095 der 11. Generation',
        salePrice: 159,
        saleUntil: new Date(2023, 6, 1),
        storageSize: '1 TB',
        storageDescription: 'M.2 2280 SATA/PCIe SSD',
        storageType: 'SSD',
        itemTitle: 'GEEKOM MiniAir 11',
        isAvailable: true,
    },
    {
        graphicsDescription: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        graphicsName: 'NVIDIA®',
        id: '5',
        ramSize: '16 GB',
        moreInfo: 'das ist eigentlich nur ein gehäuse, ist aber fancy',
        pictureURL: '/five.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '65 W',
        price: 259,
        processorName: 'Intel i3',
        processorDescription: 'Intel Core i3',
        salePrice: null,
        saleUntil: null,
        storageSize: '256 GB',
        storageDescription: 'NVMe SSD',
        storageType: 'SSD',
        itemTitle: 'AZZA Pyramid 804, Bench/Show-Gehäuse',
        isAvailable: true,
    },
    {
        graphicsDescription: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        graphicsName: 'NVIDIA®',
        id: '6',
        ramSize: '16 GB Dual Channel DDR5, 2 x 8 GB, bei 4.800 MT/s; bis zu 64 GB, zusätzlicher Arbeitsspeicher separat erhältlich',
        moreInfo: 'Unsere interne Architektur unterstützt mehr Power und höhere Wattleistung. Von der Anordnung der Kühlungskomponenten, der Neupositionierung der Grafikkarte bis zum Layout der UDIMM-Steckplätze – wir haben alles getan, damit Geschwindigkeit, Performance und Gameplay an erster Stelle stehen.',
        pictureURL: '/six.png',
        powerAdapterName: '750 W PSU',
        powerAdapterConsumption: '750 W',
        price: 2099,
        processorName: 'Intel i7',
        processorDescription: 'Intel® Core™ i7-13700KF der 13. Generation (54 MB Cache, 16 Cores, 3,4 GHz bis 5,4 GHz Turbo)',
        salePrice: 1799,
        saleUntil: new Date(2023, 6, 1),
        storageSize: '1 TB',
        storageDescription: '1-TB-M.2-PCIe-NVMe-SSD',
        storageType: 'SSD',
        itemTitle: 'Alienware Aurora R15',
        isAvailable: true,
    },
    {
        graphicsDescription: 'NVIDIA® GeForce GTX 1650 Ti, 4 GB GDDR6',
        graphicsName: 'NVIDIA®',
        id: '7',
        ramSize: '8 GB',
        moreInfo: 'Der perfekte Desktop-PC für produktives Arbeiten, flüssiges Gaming und beeindruckende Unterhaltung.',
        pictureURL: '/seven.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '65 W',
        price: 799,
        processorName: 'AMD Ryzen 5',
        processorDescription: 'AMD Ryzen 5 5600G',
        salePrice: null,
        saleUntil: null,
        storageSize: '512 GB',
        storageDescription: 'M.2 SSD',
        storageType: 'SSD',
        itemTitle: 'HP Pavilion TP01-1006ng',
        isAvailable: true,
    },
    {
        graphicsDescription: 'NVIDIA® GeForce GTX 1660 Super, 6 GB GDDR6',
        graphicsName: 'NVIDIA®',
        id: '8',
        ramSize: '16 GB',
        moreInfo: 'Leistungsstarker Gaming-PC für ein herausragendes Spielerlebnis mit flüssiger Bildwiedergabe und beeindruckender Grafikqualität.',
        pictureURL: '/eight.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '65 W',
        price: 1299,
        processorName: 'AMD Ryzen 7',
        processorDescription: 'AMD Ryzen 7 5800X',
        salePrice: null,
        saleUntil: null,
        storageSize: '1 TB',
        storageDescription: 'NVMe M.2 SSD',
        storageType: 'SSD',
        itemTitle: 'ASUS ROG Strix G15',
        isAvailable: true,
    },
    {
        graphicsDescription: 'AMD Radeon RX 6700 XT, 12 GB GDDR6',
        graphicsName: 'AMD Radeon',
        id: '9',
        ramSize: '32 GB',
        moreInfo: 'Hochleistungs-PC für anspruchsvolle Aufgaben wie Videobearbeitung und 3D-Modellierung.',
        pictureURL: '/nine.png',
        powerAdapterName: '750 W PSU',
        powerAdapterConsumption: '750 W',
        price: 1799,
        processorName: 'AMD Ryzen 9',
        processorDescription: 'AMD Ryzen 9 5950X',
        salePrice: 1599,
        saleUntil: new Date(2023, 6, 1),
        storageSize: '2 TB',
        storageDescription: 'Samsung 970 EVO Plus NVMe M.2 SSD',
        storageType: 'SSD',
        itemTitle: 'MSI MEG Trident X',
        isAvailable: true,
    },
    {
        graphicsDescription: 'Integrated Intel® UHD Graphics',
        graphicsName: 'Intel®',
        id: '10',
        ramSize: '4 GB',
        moreInfo: 'Kompakter und kostengünstiger PC für grundlegende Aufgaben wie Internet-Browsing und Textverarbeitung.',
        pictureURL: '/ten.png',
        powerAdapterName: 'Standard Power Adapter',
        powerAdapterConsumption: '65 W',
        price: 299,
        processorName: 'Intel Celeron',
        processorDescription: 'Intel Celeron J4125 Quad-Core',
        salePrice: null,
        saleUntil: null,
        storageSize: '64 GB',
        storageDescription: 'eMMC Flash',
        storageType: 'eMMC',
        itemTitle: 'Lenovo IdeaCentre Mini 5i',
        isAvailable: true,
    }
];


interface IconInterface {
    [key: string]: ReactElement;
}

export const Icons: IconInterface = {
    market: <FontAwesomeIcon icon={faStore}/>,
    dashboard: <FontAwesomeIcon icon={faHouse}/>,
    service: <FontAwesomeIcon icon={faBellConcierge}/>,
    sale: <FontAwesomeIcon icon={faGift}/>,
    wallet: <FontAwesomeIcon icon={faWallet}/>,
    settings: <FontAwesomeIcon icon={faGear}/>,
    imprint: <FontAwesomeIcon icon={faCircleInfo}/>,
    logout: <FontAwesomeIcon icon={faArrowRightFromBracket}/>,
    close: <FontAwesomeIcon icon={faXmark}/>
};


