import {items} from "@/util/mockedData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faChevronDown, faFan, faHardDrive, faMicrochip,} from "@fortawesome/free-solid-svg-icons";
import {differenceInDays, isBefore} from "date-fns";
import Countdown from "react-countdown";
import React, {useCallback, useMemo, useState} from "react";

type ItemInfo = {
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
};

const ShopItems = React.memo(() => {
    const [tileMax, setTileMax] = useState(20);
    const [expandedItems, setExpandedItems] = useState([""]);

    let tileCounter: number = 0;

    const handleExpandItem = useCallback((itemId: string) => {
        setExpandedItems((prevExpandedItems) => {
            if (prevExpandedItems.includes(itemId)) {
                return prevExpandedItems.filter((id) => id !== itemId);
            } else {
                return [...prevExpandedItems, itemId];
            }
        });
    }, []);

    const renderExpandedInfo = useCallback((item: ItemInfo) => {
        return (
            <div className="col-span-6">
                <div className="p-4">
                    <p className={"pb-1"}>
                        This is more information about {item.itemTitle}.
                    </p>
                    {item.moreInfo && <div className={"pb-1"}>{item.moreInfo}</div>}
                    <div className="grid grid-cols-[20%_80%] border-t-8 border-double">
                        <p className={"border-b"}>Graphics Description: </p>
                        <p className={"border-b border-dashed"}>
                            {item.graphicsDescription}
                        </p>
                        <p className={"border-b"}>Ram Size: </p>
                        <p className={"border-b border-dashed"}> {item.ramSize}</p>
                        <p className={"border-b"}>Power Adapter Name: </p>
                        <p className={"border-b border-dashed"}>
                            {" "}
                            {item.powerAdapterName}
                        </p>
                        <p className={"border-b"}>Power Adapter Consumption: </p>
                        <p className={"border-b border-dashed"}>
                            {" "}
                            {item.powerAdapterConsumption}
                        </p>
                        <p className={"border-b"}>Processor Description: </p>
                        <p className={"border-b border-dashed"}>
                            {" "}
                            {item.processorDescription}
                        </p>
                        <p>Storage Description: </p>
                        <p> {item.storageDescription}</p>
                    </div>
                </div>
            </div>
        );
    }, []);

    const renderButton = useCallback((itemTitle: string) => {
        return (
            <div className={"pt-4"}>
                <div className={"col-start-2"}>
                    <div className="p-3">
                        <button
                            className="bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full h-8 rounded-md font-semibold"
                            onClick={() =>
                                console.log("added " + itemTitle + " to cart")
                            }
                        >
                            Add <FontAwesomeIcon icon={faCartArrowDown}/>
                        </button>
                    </div>
                    <div className="p-3">
                        <div
                            className="text-center bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full rounded-md font-semibold h-8 p-px">
                            <div className="bg-zinc-800 w-full h-full rounded-md py-1">
                                More <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }, []);

    const renderNormalInfo = useCallback((item: ItemInfo) => {
        const {
            graphicsName,
            price,
            processorName,
            salePrice,
            saleUntil,
            storageSize,
            storageType,
            itemTitle,
        } = item;

        const daysUntilSale =
            saleUntil && differenceInDays(new Date(saleUntil), new Date());
        const hasSaleDays = daysUntilSale && daysUntilSale > 1;
        const isSaleUP = saleUntil && isBefore(new Date(), saleUntil);

        return (
            <div className="col-span-3 p-3 grid grid-cols-3">
                <h3 className="font-extrabold text-lg mb-2 col-span-3">{itemTitle}</h3>
                <div className="mb-2 p-2">
                    <div>
                        <FontAwesomeIcon icon={faMicrochip}/>
                        <span className="ml-2 text-zinc-400">{processorName}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHardDrive}/>
                        <span className="ml-2 text-zinc-400" title={storageType}>
              {storageSize} GB
            </span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFan}/>
                        <span className="ml-2 text-zinc-400" title={storageType}>
              {graphicsName}
            </span>
                    </div>
                </div>
                <div className="mb-2 p-2">
                    <h3 className="font-semibold">Price</h3>
                    <span
                        className={`decoration-1 ${isSaleUP ? "line-through" : ""}`}
                    >
            {price} €
          </span>
                </div>
                {isSaleUP && (
                    <div className="mb-2 p-2">
                        <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800">
                            SALE
                        </h2>
                        <span className="text-red-700 font-extrabold">
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
        );
    }, []);

    const renderedItems = useMemo(() => {
        return items.map((item: ItemInfo) => {
            const isExpanded = expandedItems.includes(item.id);

            if (tileCounter < tileMax) {
                tileCounter++;

                return (
                    <li className="w-full p-1 py-2" key={item.id}>
                        <div className="relative">
                            <div
                                className="text-xl font-extrabold absolute inset-0 flex items-center justify-center text-white bg-red-950 bg-opacity-60  w-11/12"
                                style={{
                                    zIndex: 1,
                                    top: 0,
                                    display: !item.isAvailable ? "flex" : "none",
                                }}
                            >
              <span className="bg-zinc-900 bg-opacity-90 border p-2 rounded-md">
                Not available
              </span>
                            </div>
                            <div
                                className="cursor-pointer bg-zinc-800 rounded-md overflow-hidden p-1 shadow-lg grid grid-cols-5 w-11/12"
                                onClick={() => handleExpandItem(item.id)}
                            >
                                <div
                                    className="w-40 h-40 bg-left bg-cover bg-no-repeat relative border-2 border-zinc-500 rounded-md">
                                    <img
                                        src={item.pictureURL}
                                        alt="Bild"
                                        className="w-full h-full object-cover object-center"
                                        style={{objectFit: "contain", backgroundColor: "white"}}
                                    />
                                </div>
                                {renderNormalInfo(item)}
                                {renderButton(item.itemTitle)}
                                {isExpanded && renderExpandedInfo(item)}
                            </div>
                        </div>
                    </li>
                );
            } else {
                return null;
            }
        });
    }, [
        expandedItems,
        tileCounter,
        tileMax,
        handleExpandItem,
        renderExpandedInfo,
        renderButton,
        renderNormalInfo,
    ]);

    return (
        <ul className="p-1.5">
            <div className="grid grid-cols-1 gap-4">
                {renderedItems}
            </div>
            <button
                onClick={() => setTileMax((prevTileMax) => prevTileMax + 20)}
            >
                More
            </button>
        </ul>
    );
});

export default ShopItems;
