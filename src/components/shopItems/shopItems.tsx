import {items} from "@/util/mockedData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faFan, faHardDrive, faMicrochip} from "@fortawesome/free-solid-svg-icons";
import React, {useCallback, useMemo, useState} from "react";
import {ItemInfo} from "@/util/itemType";

const ShopItems = React.memo(() => {
    const [tileMax, setTileMax] = useState(20);
    const [expandedItems, setExpandedItems] = useState([""]);
    let tileCounter = 0;

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
                        This is more information about {item.name}.
                    </p>
                    {item.description && <div className={"pb-1"}>{item.description}</div>}
                    <div className="grid grid-cols-[20%_80%] border-t-8 border-double">
                        <p className={"border-b"}>Graphics Description: </p>
                        <p className={"border-b border-dashed"}>
                            {item.gpu.description}
                        </p>
                        <p className={"border-b"}>Ram Size: </p>
                        <p className={"border-b border-dashed"}> {item.ram.size}</p>
                        <p className={"border-b"}>Power Adapter Name: </p>
                        <p className={"border-b border-dashed"}> {item.psu.name}</p>
                        <p className={"border-b"}>Power Adapter Consumption: </p>
                        <p className={"border-b border-dashed"}>
                            {item.psu.consumption}
                        </p>
                        <p className={"border-b"}>Processor Description: </p>
                        <p className={"border-b border-dashed"}> {item.cpu.description}</p>
                        <p id={`list${item.id}`}>Storage Description: </p>
                        <p> {item.storage.description}</p>
                    </div>
                </div>
            </div>
        );
    }, []);

    const renderButton = useCallback((id: string, isExpanded: boolean) => {
        return (
            <div className={"pt-1"}>
                <div className={"col-start-2"}>
                    <div className="px-3 py-2">
                        <div
                            className="text-center bg-gradient-to-tr from-fuchsia-600 to-violet-600 w-full rounded-md font-semibold h-8 p-px"
                            style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                        >
                            <div
                                id={isExpanded ? "expanded" : `list${id}`}
                                className="bg-zinc-800 w-full h-full rounded-md py-1"
                                style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                            >
                                More <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }, []);

    const renderNormalInfo = useCallback((item: ItemInfo) => {
        const {gpu, price, cpu, salePrice, saleUntil, storage, name} = item;

        return (
            <div className="col-span-3 p-3 grid grid-cols-2">
                <h3 className="font-extrabold text-lg mb-2 col-span-2">{name}</h3>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faMicrochip}/>
                        <span className="ml-2 text-zinc-400">{gpu.name}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHardDrive}/>
                        <span className="ml-2 text-zinc-400" title={storage.name}>
              {storage.size} GB
            </span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFan}/>
                        <span className="ml-2 text-zinc-400" title={storage.description}>
              {gpu.name}
            </span>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold">Price</h3>
                    <span className={`decoration-1`}>{price} €</span>
                </div>
            </div>
        );
    }, []);

    const renderedItems = useMemo(() => {
        return items.map((item) => {
            const isExpanded = expandedItems.includes(item.id);

            if (tileCounter < tileMax) {
                tileCounter++;

                return (
                    <li className="w-full p-1 py-2" key={item.id}>
                        <div className="relative">
                            <div
                                className="text-xl font-extrabold absolute inset-0 flex items-center justify-center text-white bg-red-950 bg-opacity-60"
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
                                className="cursor-pointer bg-zinc-800 rounded-md overflow-hidden p-1 shadow-lg grid grid-cols-[40%_60%]"
                                onClick={() => handleExpandItem(item.id)}
                                style={{display: "grid"}}
                            >
                                <div
                                    className="bg-left bg-cover bg-no-repeat relative border-2 border-zinc-500 rounded-md"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "scale-down",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <img
                                        src={item.pictureUrl}
                                        alt="Bild"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "scale-down",
                                            backgroundColor: "white",
                                        }}
                                    />
                                </div>
                                <div>
                                    {renderNormalInfo(item)}
                                    {renderButton(item.id, isExpanded)}
                                </div>
                                <div className={"col-span-2"}>{isExpanded && renderExpandedInfo(item)}</div>
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
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">{renderedItems}</div>
            <button onClick={() => setTileMax((prevTileMax) => prevTileMax + 20)}>More</button>
        </ul>
    );
});

export default ShopItems;
