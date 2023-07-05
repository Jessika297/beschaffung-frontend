import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faComputerMouse,
    faDownload,
    faHandHoldingHand,
    faHandHoldingMedical,
    faRecycle
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const services = [
    {
        image: "/recycling.jpg",
        title: "Recycling",
        icon: <FontAwesomeIcon icon={faRecycle}/>,
        textFirst: "Partner",
        textSecond: "Our Partner will recycle your old harware",
        expanded: "Recycling is great",
        index: 0,
    },
    {
        image: "/maintenance.jpg",
        title: "Maintenance",
        icon: <FontAwesomeIcon icon={faHandHoldingMedical}/>,
        textFirst: "3",
        textSecond: "We maintain our sold Hardware",
        expanded: "Maintenance is great",
        index: 1,
    },
    {
        image: "/peripherals.jpg",
        title: "Peripherals",
        icon: <FontAwesomeIcon icon={faComputerMouse}/>,
        textFirst: "Equipment",
        textSecond: "You can get peripherals from us",
        expanded: "Peripherals are great",
        index: 2,
    },
    {
        image: "/dataRecovery.jpg",
        title: "Data Recovery",
        icon: <FontAwesomeIcon icon={faBackward}/>,
        textFirst: "Partner",
        textSecond: "Our Partner will recover your data",
        expanded: "Recovery is great",
        index: 3,
    },
    {
        image: "/installation.jpg",
        title: "Installation",
        icon: <FontAwesomeIcon icon={faDownload}/>,
        textFirst: "Software",
        textSecond: "You can book Software installation",
        expanded: "Installation is great",
        index: 4,
    },
    {
        image: "/warranty.jpg",
        title: "Warranty",
        icon: <FontAwesomeIcon icon={faHandHoldingHand}/>,
        textFirst: "Duration",
        textSecond: "We offer extended warranty",
        expanded: "Warranty is great",
        index: 5,
    },
];

const SpecialServices = () => {
    const tileMax = 6;

    return (
        <ul className="p-1.5 flex flex-wrap">
            {services.map((service) => {
                if (service.index < tileMax) {
                    return (
                        <li className="w-full lg:w-1/2 xl:w-1/3 p-1.5" key={service.index}>
                            <div className="block bg-zinc-800 rounded-md w-full overflow-hidden pb-4 shadow-lg">
                                <div
                                    className="w-full h-40 bg-center bg-cover relative"
                                    style={{backgroundImage: `url(${service.image})`}}
                                >
                                    <div
                                        className="absolute grid grid-cols-2 left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md items-center bg-opacity-30 backdrop-blur-md">
                                        <span
                                            className={'col-span-2 font-extrabold p-2 text-zinc-700 bg-white rounded bg-opacity-60'}>{service.title}</span>
                                        <div className="p-3">
                                            <Link href={'/service/#' + service.title}
                                                  className={'text-center font-bold p-2 py-1 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-20'}>MORE
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={'font-semibold text-lg px-3 mt-2'}>
                                    {service.icon}
                                    <span className="ml-2">{service.title}</span>
                                </div>
                                <div className="items-center px-3 mt-2">
                                    <div>
                                        <span className=" ml-2 text-zinc-400">{service.textSecond}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                } else {
                    return null;
                }
            })}
        </ul>
    );
};

export default SpecialServices;
