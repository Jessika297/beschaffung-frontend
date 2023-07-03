import {items} from "@/util/mockedData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHardDrive, faMicrochip, faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

type ItemInfo = {
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
};

export default function SidebarRight() {
    const displayedItems = items.slice(0, 3);

    return (
        <div className="p-3 md:w-72 md:sticky md:top-16 shrink-0 h-full">
            <h2 className="text-xl font-semibold">Top Items</h2>
            <ul className="mt-3 space-y-3">
                {displayedItems.map((item: ItemInfo) => (
                    <li className="bg-zinc-800 rounded-md p-2 grid grid-cols-[20%_80%] shadow-lg"
                        key={item.name + item.id}>
                        <div
                            className="w-10 h-10 bg-gradient-to-tr from-fuchsia-600 to-violet-600 grid place-items-center rounded-md font-bold text-white text-2xl">
                            {item.id}
                        </div>
                        <div className="ml-3">
                            <h3 className="font-semibold">{item.name}</h3>
                            <div className="grid grid-cols-3 text-center">
                <span>
                  <FontAwesomeIcon icon={faMicrochip}/>
                  <p className="text-sm text-zinc-400">{item.cpu.name}</p>
                </span>
                                <span>
                  <FontAwesomeIcon icon={faHardDrive}/>
                  <p className="text-sm text-zinc-400" title={item.storage.name}>{item.storage.size}</p>
                </span>
                                <span>
                  <FontAwesomeIcon icon={faMoneyBill1Wave}/>
                  <p className="text-sm text-zinc-400">{item.salePrice ? item.salePrice : item.price} €</p>
                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div
                className="w-full rounded-md bg-gradient-to-tr from-fuchsia-600 to-violet-600 mt-3 p-3 relative overflow-hidden">
                <div className="z-10 relative">
                    <h2 className="text-white font-semibold">Get our full Service</h2>
                    <p className="text-white/50 text-sm mt-1">We recycle your hardware after it's expanded.</p>
                    <button className="bg-white w-full rounded-md h-12 text-gray-900 font-semibold mt-2">
                        <Link href={'/service'}>Get the deal</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
