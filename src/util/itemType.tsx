export type ItemInfo = {
    id: string;
    name: string;
    description: string;
    pictureUrl: string;
    price: number;
    isAvailable: boolean;
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
};
