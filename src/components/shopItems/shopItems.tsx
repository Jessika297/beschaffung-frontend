import {items} from "@/util/mockedData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faChevronDown, faHardDrive, faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {differenceInDays, isBefore} from "date-fns";
import Countdown from "react-countdown";
import {useState} from "react";

const ShopItems = () => {
    const [tileMax, setTileMax] = useState(20);
    const [expandedItem, setExpandedItem] = useState(null);

    let tileCounter = 0;

    const handleExpandItem = (key: any) => {
        setExpandedItem((prevExpandedItem) => (key === prevExpandedItem ? null : key));
    };

    return (
        <ul className="p-1.5">
            {items.map(({key, processor, storage, storageType, price, salePrice, title, moreInfo, saleUntil}) => {
                const daysUntilSale = saleUntil && differenceInDays(new Date(saleUntil), new Date());
                const hasSaleDays = daysUntilSale && daysUntilSale > 1;
                const isSaleUP = saleUntil && isBefore(new Date(), saleUntil);

                if (salePrice && isSaleUP && tileCounter < tileMax) {
                    tileCounter++;

                    return (
                        <li className="w-full p-1 py-2" key={key}>
                            <div
                                className="cursor-pointer bg-zinc-800 rounded-md overflow-hidden p-1 shadow-lg grid grid-cols-5 w-11/12"
                                onClick={() => handleExpandItem(key)}>
                                <div
                                    className="bg-left bg-cover bg-no-repeat relative border-2 border-zinc-500 rounded-md"
                                    style={{backgroundImage: `url(/sale.jpg)`}}></div>
                                <div className="col-span-2 p-3 grid grid-cols-2">
                                    <h3 className="font-extrabold text-lg mb-2 col-span-2">{title}</h3>
                                    <div className="mb-2 p-2">
                                        <div className="">
                                            <FontAwesomeIcon icon={faMicrochip}/>
                                            <span className="ml-2 text-zinc-400">{processor}</span>
                                        </div>
                                        <div className="">
                                            <FontAwesomeIcon icon={faHardDrive}/>
                                            <span className="ml-2 text-zinc-400" title={storageType}>{storage} GB</span>
                                        </div>
                                    </div>
                                    <div className="mb-2 p-2">
                                        <h3 className="font-semibold">Price</h3>
                                        <span
                                            className={`decoration-1 ${isSaleUP ? "line-through" : ""}`}>{price} €</span>
                                    </div>
                                </div>
                                <div className={"pt-4 grid grid-cols-2 col-span-2"}>
                                    {isSaleUP && (
                                        <div className="mb-2 p-2">
                                            <h2 className={"font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800"}>SALE</h2>
                                            <span className={`text-red-700 font-extrabold`}>{salePrice} €</span>
                                            {hasSaleDays ? (
                                                <div>{daysUntilSale}+ Days</div>
                                            ) : (
                                                <Countdown
                                                    date={saleUntil}
                                                    renderer={({days, hours, minutes}) => (
                                                        <div>{`${days * 24 + hours}h: ${minutes}m`}</div>
                                                    )}
                                                />
                                            )}
                                        </div>
                                    )}
                                    <div className={"col-start-2"}>
                                        <div className="p-3">
                                            <button
                                                className="bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full h-8 rounded-md font-semibold"
                                                onClick={() => console.log("added " + title + " to cart")}>
                                                Add <FontAwesomeIcon icon={faCartArrowDown}/>
                                            </button>
                                        </div>
                                        <div className="p-3">
                                            <div
                                                className="text-center bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full rounded-md font-semibold h-8 p-px">
                                                <div
                                                    className="bg-zinc-800 w-full h-full rounded-md py-1">More <FontAwesomeIcon
                                                    icon={faChevronDown}/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {expandedItem === key && (
                                    <div className="col-span-6">
                                        <div className="p-4">
                                            <p>This is more information about {title}.</p>
                                            {moreInfo}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    );
                } else {
                    return null;
                }
            })}
            <button onClick={() => setTileMax((prevTileMax) => prevTileMax + 20)}>More</button>
        </ul>
    );
};

export default ShopItems;
