import {items} from "@/util/mockedData";
import Countdown from "react-countdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHardDrive, faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {differenceInDays, isBefore} from "date-fns";

export default function Items() {
    return (
        <ul className="p-1.5 flex flex-wrap">
            {items.map(
                ({key, processor, storage, storageType, price, salePrice, title, saleUntil,}) => {
                    const daysUntilSale = differenceInDays(new Date(saleUntil), new Date());
                    const hasSaleDays = daysUntilSale > 1;
                    const isSaleUP = isBefore(new Date(), saleUntil)
                    let tileCounter = 0;
                    tileCounter++;

                    return (salePrice && isSaleUP && tileCounter < 6 &&
                        <li className="w-full lg:w-1/2 xl:w-1/3  p-1.5" key={key}>
                            <a
                                className="block bg-zinc-800 rounded-md w-full overflow-hidden pb-4 shadow-lg"
                                href="#items"
                            >
                                <div
                                    className="w-full h-40 bg-center bg-cover relative"
                                    style={{backgroundImage: `url(/sale.jpg)`}}
                                >
                                    <div
                                        className="absolute grid grid-cols-2 left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md items-center bg-opacity-30 backdrop-blur-md">
                                        <span
                                            className={'col-span-2 font-extrabold p-2 text-zinc-700 bg-white rounded bg-opacity-60'}>{title}</span>
                                        <div className="p-3">
                                            <h3 className="font-bold text-red-700">Price</h3>
                                            <span className="text-red-700 font-semibold">{salePrice} €</span>
                                            <span className="ml-2 line-through decoration-1">{price}</span>
                                        </div>
                                        <div className="p-3">
                                            <h3 className="font-semibold">Ending in</h3>
                                            {hasSaleDays
                                                ? (<div>{daysUntilSale}+ Days</div>)
                                                : (<Countdown
                                                    date={saleUntil}
                                                    renderer={({days, hours, minutes, seconds}) => (
                                                        <div>{`${days * 24 + hours}h: ${minutes}m: ${seconds}s`}</div>
                                                    )}
                                                />)}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg px-3 mt-2">{title}</h3>
                                <div className="items-center px-3 mt-2 grid grid-cols-2">
                                    <div>
                                        <FontAwesomeIcon icon={faMicrochip}/>
                                        <span className=" ml-2 text-zinc-400">{processor}</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faHardDrive}/>
                                        <span className=" ml-2 text-zinc-400" title={storageType}>
                      {storage} GB
                    </span>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <div className="p-3 w-1/2">
                                        <button
                                            className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full h-12 rounded-md font-semibold"
                                            onClick={() => console.log('added ' + title + ' to cart')}>
                                            Add to cart
                                        </button>
                                    </div>
                                    <div className="p-3 w-1/2">
                                        <button
                                            className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full rounded-md font-semibold h-12 p-px">
                                            <div
                                                className="bg-zinc-800 w-full h-full rounded-md grid place-items-center">
                                                View Specs
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </li>

                    );
                }
            )}
        </ul>
    );
}
