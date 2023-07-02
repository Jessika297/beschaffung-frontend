import {items} from "@/util/mockedData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faChevronDown, faFan, faHardDrive, faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {differenceInDays, isBefore} from "date-fns";
import Countdown from "react-countdown";
import React, {useState} from "react";

const ShopItems = () => {
    const [tileMax, setTileMax] = useState(20);
    const [expandedItems, setExpandedItems] = useState(['']);

    let tileCounter: number = 0;

    const handleExpandItem = (itemId: string) => {
        setExpandedItems((prevExpandedItems) => {
            if (prevExpandedItems.includes(itemId)) {
                return prevExpandedItems.filter((id) => id !== itemId);
            } else {
                return [...prevExpandedItems, itemId];
            }
        });
    };

    return (
        <ul className="p-1.5">
            {items.map(({
                            graphicsDescription,
                            graphicsName,
                            id,
                            ramSize,
                            moreInfo,
                            pictureURL,
                            powerAdapterName,
                            powerAdapterConsumption,
                            price,
                            processorName,
                            processorDescription,
                            salePrice,
                            saleUntil,
                            storageSize,
                            storageDescription,
                            storageType,
                            itemTitle,
                            isAvailable
                        }) => {
                const daysUntilSale = saleUntil && differenceInDays(new Date(saleUntil), new Date());
                const hasSaleDays = daysUntilSale && daysUntilSale > 1;
                const isSaleUP = saleUntil && isBefore(new Date(), saleUntil);
                const isExpanded = expandedItems.includes(id);

                if (tileCounter < tileMax) {
                    tileCounter++;

                    return (
                        <li className="w-full p-1 py-2" key={id}>
                            <div
                                className="cursor-pointer bg-zinc-800 rounded-md overflow-hidden p-1 shadow-lg grid grid-cols-5 w-11/12"
                                onClick={() => handleExpandItem(id)}
                            >
                                <div
                                    className="w-40 h-40 bg-left bg-cover bg-no-repeat relative border-2 border-zinc-500 rounded-md"
                                >
                                    <img
                                        src={pictureURL}
                                        alt="Bild"
                                        className="w-full h-full object-cover object-center"
                                        style={{objectFit: "contain", backgroundColor: "white"}}
                                    />
                                </div>
                                <div className="col-span-3 p-3 grid grid-cols-3">
                                    <h3 className="font-extrabold text-lg mb-2 col-span-3">{itemTitle}</h3>
                                    <div className="mb-2 p-2">
                                        <div className="">
                                            <FontAwesomeIcon icon={faMicrochip}/>
                                            <span className="ml-2 text-zinc-400">{processorName}</span>
                                        </div>
                                        <div className="">
                                            <FontAwesomeIcon icon={faHardDrive}/>
                                            <span
                                                className="ml-2 text-zinc-400"
                                                title={storageType}
                                            >
                                                {storageSize} GB
                                            </span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faFan}/>
                                            <span
                                                className=" ml-2 text-zinc-400"
                                                title={storageType}
                                            >
                                                {graphicsName}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-2 p-2">
                                        <h3 className="font-semibold">Price</h3>
                                        <span
                                            className={`decoration-1 ${
                                                isSaleUP ? "line-through" : ""
                                            }`}
                                        >
                                            {price} €
                                        </span>
                                    </div>
                                    {isSaleUP && (
                                        <div className="mb-2 p-2">
                                            <h2 className={"font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800"}>
                                                SALE
                                            </h2>
                                            <span className={`text-red-700 font-extrabold`}>
                                                {salePrice} €
                                            </span>
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
                                </div>
                                <div className={"pt-4"}>
                                    <div className={"col-start-2"}>
                                        <div className="p-3">
                                            <button
                                                className="bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full h-8 rounded-md font-semibold"
                                                onClick={() =>
                                                    console.log(
                                                        "added " + itemTitle + " to cart"
                                                    )
                                                }
                                            >
                                                Add{" "}
                                                <FontAwesomeIcon
                                                    icon={faCartArrowDown}
                                                />
                                            </button>
                                        </div>
                                        <div className="p-3">
                                            <div
                                                className="text-center bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full rounded-md font-semibold h-8 p-px"
                                            >
                                                <div
                                                    className="bg-zinc-800 w-full h-full rounded-md py-1"
                                                >
                                                    More{" "}
                                                    <FontAwesomeIcon
                                                        icon={faChevronDown}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isExpanded && (
                                    <div className="col-span-6">
                                        <div className="p-4">
                                            <p className={'pb-1'}>
                                                This is more information about {itemTitle}
                                                .
                                            </p>
                                            {moreInfo && (
                                                <div className={'pb-1'}>{moreInfo}</div>
                                            )}
                                            <div className="grid grid-cols-[20%_80%] border-t-8 border-double">
                                                <p className={'border-b'}>Graphics Description: </p>
                                                <p className={'border-b border-dashed'}>{graphicsDescription}</p>
                                                <p className={'border-b'}>Ram Size: </p>
                                                <p className={'border-b border-dashed'}> {ramSize}</p>
                                                <p className={'border-b'}>Power Adapter Name: </p>
                                                <p className={'border-b border-dashed'}> {powerAdapterName}</p>
                                                <p className={'border-b'}>Power Adapter Consumption: </p>
                                                <p className={'border-b border-dashed'}> {powerAdapterConsumption}</p>
                                                <p className={'border-b'}>Processor Description: </p>
                                                <p className={'border-b border-dashed'}> {processorDescription}</p>
                                                <p>Storage Description: </p>
                                                <p> {storageDescription}</p>
                                            </div>
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
            <button onClick={() => setTileMax((prevTileMax) => prevTileMax + 20)}>
                More
            </button>
        </ul>
    );
};

export default ShopItems;

