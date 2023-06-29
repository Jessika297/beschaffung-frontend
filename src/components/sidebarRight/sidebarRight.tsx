import {items} from "@/util/mockedData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHardDrive, faMicrochip, faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";


export default function SidebarRight() {
    return (
        <div className="p-3 md:w-72 md:sticky md:top-16 shrink-0 h-full">
            <h2 className="text-xl font-semibold">Top Items</h2>
            <ul className="mt-3 space-y-3">
                {items.map(({key, processor, storage, storageType, price, salePrice, title}) => (
                    <li className="bg-zinc-800 rounded-md p-2 grid grid-cols-[20%_80%] shadow-lg"
                        key={title + key}>
                        <div
                            className="w-10 h-10 bg-gradient-to-tr from-fuchsia-600 to-violet-600 grid place-items-center rounded-md font-bold text-white text-2xl">
                            {key}
                        </div>
                        <div className="ml-3">
                            <h3 className="font-semibold">{title}</h3>
                            <div className="grid grid-cols-3 text-center">
                <span>
                  <FontAwesomeIcon icon={faMicrochip}/>
                  <p className="text-sm text-zinc-400">{processor}</p>
                </span>
                                <span>
                  <FontAwesomeIcon icon={faHardDrive}/>
                  <p className="text-sm text-zinc-400" title={storageType}>{storage}</p>
                </span>
                                <span>
                  <FontAwesomeIcon icon={faMoneyBill1Wave}/>
                  <p className="text-sm text-zinc-400">{salePrice ? salePrice : price} €</p>
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
