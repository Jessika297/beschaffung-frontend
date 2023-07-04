import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBellConcierge,
    faCircleInfo,
    faGear,
    faHouse,
    faStore,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import {ReactElement} from "react";

interface Datenbankschema {
    id: string;
    name: string;
    description: string;
    pictureUrl: string;
    price: number;
    isAvailable: boolean;
    salePrice: number | null;
    saleUntil: Date | null;
    gpu: {
        id: string;
        name: string;
        description: string;
    };
    ram: {
        id: string;
        name: string;
        description: string;
        size: string;
    };
    psu: {
        id: string;
        name: string;
        consumption: string;
        description: string;
    };
    cpu: {
        id: string;
        name: string;
        description: string;
    };
    storage: {
        id: string;
        name: string;
        description: string;
        size: string;
    };
    mainboard: {
        id: string;
        name: string;
        description: string;
    };
}

export const items: Datenbankschema[] = [
    {
        id: '1',
        name: 'Fujitsu Esprimo Q920',
        description: 'best PC ever',
        pictureUrl: '/one.png',
        price: 139,
        isAvailable: false,
        salePrice: 122,
        saleUntil: new Date(2023, 6, 5),
        gpu: {
            id: '1',
            name: 'Intel',
            description: 'HD Graphics 4600',
        },
        ram: {
            id: '1',
            name: 'RAM',
            description: '16 GB',
            size: '16 GB',
        },
        psu: {
            id: '1',
            name: 'Standard Power Adapter',
            consumption: '65 W',
            description: 'Standard Power Adapter',
        },
        cpu: {
            id: '1',
            name: 'Intel i5',
            description: 'Core i5-4590T',
        },
        storage: {
            id: '1',
            name: 'Storage',
            description: 'SATA HDD',
            size: '500 GB',
        },
        mainboard: {
            id: '1',
            name: 'Mainboard',
            description: 'Fujitsu Esprimo Q920 Mainboard',
        },
    },
    {
        id: '2',
        name: 'Toshiba Libretto U100',
        description: 'In äußerst leichtem und kompaktem Design vereint das edel anmutende Gerät Funktionalität und Performance eines großformatigen Notebooks auf kleinstem Raum.',
        pictureUrl: '/two.png',
        price: 5,
        isAvailable: true,
        salePrice: 0,
        saleUntil: new Date(2023, 7, 1),
        gpu: {
            id: '2',
            name: 'Intel',
            description: 'Intel Extreme Graphics 2 - 64 MB VRAM',
        },
        ram: {
            id: '2',
            name: 'RAM',
            description: '0 GB',
            size: '0 GB',
        },
        psu: {
            id: '2',
            name: '4.5h Akkulaufzeit',
            consumption: '30 W',
            description: '4.5h Akkulaufzeit',
        },
        cpu: {
            id: '2',
            name: 'Intel Pentium',
            description: 'Intel Pentium M 753 1 x 1.2 GHz, Dothan',
        },
        storage: {
            id: '2',
            name: 'Storage',
            description: 'IDE HDD',
            size: '0 GB',
        },
        mainboard: {
            id: '2',
            name: 'Mainboard',
            description: 'Toshiba Libretto U100 Mainboard',
        },
    },
    {
        id: '3',
        name: 'Chieftec LG-01B-OP',
        description: 'jupp auch nur ein Gehäuse',
        pictureUrl: '/three.png',
        price: 899,
        isAvailable: true,
        salePrice: 799,
        saleUntil: new Date(2023, 6, 10),
        gpu: {
            id: '3',
            name: 'NVIDIA®',
            description: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        },
        ram: {
            id: '3',
            name: 'RAM',
            description: '16 GB',
            size: '16 GB',
        },
        psu: {
            id: '3',
            name: 'Standard Power Adapter',
            consumption: '120 W',
            description: 'Standard Power Adapter',
        },
        cpu: {
            id: '3',
            name: 'Intel i3',
            description: 'Intel Core i3',
        },
        storage: {
            id: '3',
            name: 'Storage',
            description: 'NVMe SSD',
            size: '256 GB',
        },
        mainboard: {
            id: '3',
            name: 'Mainboard',
            description: 'Chieftec LG-01B-OP Mainboard',
        },
    },
    {
        id: '4',
        name: 'GEEKOM MiniAir 11',
        description: 'Der MiniAir 11 Mini-PC bietet zuverlässige Leistung und ultrakompaktes Design für eine Vielzahl von Anwendungen wie tägliche Arbeit, Online-Lernen, Heimgebrauch und mehr.',
        pictureUrl: '/four.png',
        price: 299,
        isAvailable: true,
        salePrice: 159,
        saleUntil: new Date(2023, 6, 11),
        gpu: {
            id: '4',
            name: 'Intel®UHD-Grafik',
            description: 'Intel®UHD-Grafik 605 Unterstützung für 4K UHD-Displays',
        },
        ram: {
            id: '4',
            name: 'RAM',
            description: '32 GB',
            size: '32 GB',
        },
        psu: {
            id: '4',
            name: 'Standard Power Adapter',
            consumption: '65 W',
            description: 'Standard Power Adapter',
        },
        cpu: {
            id: '4',
            name: 'Intel® Quad-Core',
            description: 'Intel® Quad-Core Celeron N5095 der 11. Generation',
        },
        storage: {
            id: '4',
            name: 'Storage',
            description: 'M.2 2280 SATA/PCIe SSD',
            size: '1 TB',
        },
        mainboard: {
            id: '4',
            name: 'Mainboard',
            description: 'GEEKOM MiniAir 11 Mainboard',
        },
    },
    {
        id: '5',
        name: 'AZZA Pyramid 804, Bench/Show-Gehäuse',
        description: 'das ist eigentlich nur ein gehäuse, ist aber fancy',
        pictureUrl: '/five.png',
        price: 259,
        isAvailable: true,
        salePrice: null,
        saleUntil: null,
        gpu: {
            id: '5',
            name: 'NVIDIA®',
            description: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        },
        ram: {
            id: '5',
            name: 'RAM',
            description: '16 GB',
            size: '16 GB',
        },
        psu: {
            id: '5',
            name: 'Standard Power Adapter',
            consumption: '65 W',
            description: 'Standard Power Adapter',
        },
        cpu: {
            id: '5',
            name: 'Intel i3',
            description: 'Intel Core i3',
        },
        storage: {
            id: '5',
            name: 'Storage',
            description: 'NVMe SSD',
            size: '256 GB',
        },
        mainboard: {
            id: '5',
            name: 'Mainboard',
            description: 'AZZA Pyramid 804 Mainboard',
        },
    },
    {
        id: '6',
        name: 'Alienware Aurora R15',
        description: 'Unsere interne Architektur unterstützt mehr Power und höhere Wattleistung. Von der Anordnung der Kühlungskomponenten, der Neupositionierung der Grafikkarte bis zum Layout der UDIMM-Steckplätze – wir haben alles getan, damit Geschwindigkeit, Performance und Gameplay an erster Stelle stehen.',
        pictureUrl: '/six.png',
        price: 2099,
        isAvailable: true,
        salePrice: 1799,
        saleUntil: new Date(2023, 7, 1),
        gpu: {
            id: '6',
            name: 'NVIDIA®',
            description: 'NVIDIA® GeForce RTX™ 3060, 12 GB GDDR6, LHR',
        },
        ram: {
            id: '6',
            name: 'RAM',
            description: '16 GB Dual Channel DDR5, 2 x 8 GB, bei 4.800 MT/s; bis zu 64 GB, zusätzlicher Arbeitsspeicher separat erhältlich',
            size: '16 GB',
        },
        psu: {
            id: '6',
            name: '750 W PSU',
            consumption: '750 W',
            description: '750 W PSU',
        },
        cpu: {
            id: '6',
            name: 'Intel i7',
            description: 'Intel® Core™ i7-13700KF der 13. Generation (54 MB Cache, 16 Cores, 3,4 GHz bis 5,4 GHz Turbo)',
        },
        storage: {
            id: '6',
            name: 'Storage',
            description: '1-TB-M.2-PCIe-NVMe-SSD',
            size: '1 TB',
        },
        mainboard: {
            id: '6',
            name: 'Mainboard',
            description: 'Alienware Aurora R15 Mainboard',
        },
    },
    {
        id: '7',
        name: 'HP Pavilion TP01-1006ng',
        description: 'Der perfekte Desktop-PC für produktives Arbeiten, flüssiges Gaming und beeindruckende Unterhaltung.',
        pictureUrl: '/seven.png',
        price: 799,
        isAvailable: true,
        salePrice: null,
        saleUntil: null,
        gpu: {
            id: '7',
            name: 'NVIDIA®',
            description: 'NVIDIA® GeForce GTX 1650 Ti, 4 GB GDDR6',
        },
        ram: {
            id: '7',
            name: 'RAM',
            description: '8 GB',
            size: '8 GB',
        },
        psu: {
            id: '7',
            name: 'Standard Power Adapter',
            consumption: '65 W',
            description: 'Standard Power Adapter',
        },
        cpu: {
            id: '7',
            name: 'AMD Ryzen 5',
            description: 'AMD Ryzen 5 5600G',
        },
        storage: {
            id: '7',
            name: 'Storage',
            description: 'M.2 SSD',
            size: '512 GB',
        },
        mainboard: {
            id: '7',
            name: 'Mainboard',
            description: 'HP Pavilion TP01-1006ng Mainboard',
        },
    },
    {
        id: '8',
        name: 'ASUS PN62-BB3006MD',
        description: 'Der kompakte und leistungsstarke Mini-PC ASUS PN62-BB3006MD kombiniert die neueste AMD Ryzen 5 4500U Mobile Prozessor (CPU) Technologie mit einem eleganten und kompakten Design.',
        pictureUrl: '/eight.png',
        price: 899,
        isAvailable: true,
        salePrice: null,
        saleUntil: null,
        gpu: {
            id: '8',
            name: 'AMD Radeon',
            description: 'AMD Radeon Graphics',
        },
        ram: {
            id: '8',
            name: 'RAM',
            description: '16 GB',
            size: '16 GB',
        },
        psu: {
            id: '8',
            name: 'Standard Power Adapter',
            consumption: '65 W',
            description: 'Standard Power Adapter',
        },
        cpu: {
            id: '8',
            name: 'AMD Ryzen 5',
            description: 'AMD Ryzen 5 4500U',
        },
        storage: {
            id: '8',
            name: 'Storage',
            description: 'M.2 SSD',
            size: '512 GB',
        },
        mainboard: {
            id: '8',
            name: 'Mainboard',
            description: 'ASUS PN62-BB3006MD Mainboard',
        },
    },
    {
        id: '9',
        name: 'MSI MEG Trident X',
        description: 'Hochleistungs-PC für anspruchsvolle Aufgaben wie Videobearbeitung und 3D-Modellierung.',
        pictureUrl: '/nine.png',
        price: 1799,
        isAvailable: true,
        salePrice: 1599,
        saleUntil: new Date(2023, 6, 8),
        gpu: {
            id: '9',
            name: 'AMD Radeon',
            description: 'AMD Radeon RX 6700 XT, 12 GB GDDR6',
        },
        ram: {
            id: '9',
            name: '32 GB',
            description: '32 GB RAM',
            size: '32 GB',
        },
        psu: {
            id: '9',
            name: '750 W PSU',
            consumption: '750 W',
            description: '750 W Power Supply Unit',
        },
        cpu: {
            id: '9',
            name: 'AMD Ryzen 9',
            description: 'AMD Ryzen 9 5950X',
        },
        storage: {
            id: '9',
            name: 'Samsung 970 EVO Plus NVMe M.2 SSD',
            description: '2 TB Samsung 970 EVO Plus NVMe M.2 SSD',
            size: '2 TB',
        },
        mainboard: {
            id: '9',
            name: 'MSI MEG Trident X Mainboard',
            description: 'Mainboard for MSI MEG Trident X',
        },
    },
    {
        id: '10',
        name: 'Lenovo IdeaCentre Mini 5i',
        description: 'Kompakter und kostengünstiger PC für grundlegende Aufgaben wie Internet-Browsing und Textverarbeitung.',
        pictureUrl: '/ten.png',
        price: 299,
        isAvailable: true,
        salePrice: null,
        saleUntil: null,
        gpu: {
            id: '10',
            name: 'Intel®',
            description: 'Integrated Intel® UHD Graphics',
        },
        ram: {
            id: '10',
            name: '4 GB',
            description: '4 GB RAM',
            size: '4 GB',
        },
        psu: {
            id: '10',
            name: 'Standard Power Adapter',
            consumption: '65 W',
            description: '65 W Standard Power Adapter',
        },
        cpu: {
            id: '10',
            name: 'Intel Celeron',
            description: 'Intel Celeron J4125 Quad-Core',
        },
        storage: {
            id: '10',
            name: 'eMMC Flash',
            description: '64 GB eMMC Flash',
            size: '64 GB',
        },
        mainboard: {
            id: '10',
            name: 'Lenovo IdeaCentre Mini 5i Mainboard',
            description: 'Mainboard for Lenovo IdeaCentre Mini 5i',
        },
    }
];

interface IconInterface {
    [key: string]: ReactElement;
}

export const Icons: IconInterface = {
    market: <FontAwesomeIcon icon={faStore}/>,
    dashboard: <FontAwesomeIcon icon={faHouse}/>,
    service: <FontAwesomeIcon icon={faBellConcierge}/>,
    settings: <FontAwesomeIcon icon={faGear}/>,
    imprint: <FontAwesomeIcon icon={faCircleInfo}/>,
    logout: <FontAwesomeIcon icon={faArrowRightFromBracket}/>,
    close: <FontAwesomeIcon icon={faXmark}/>
};


