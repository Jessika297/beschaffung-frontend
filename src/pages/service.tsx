import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowDown,
    faBackward,
    faComputerMouse,
    faDownload,
    faHandHoldingHand,
    faHandHoldingMedical,
    faRecycle
} from "@fortawesome/free-solid-svg-icons";

import SidebarRight from "@/components/sidebarRight/sidebarRight";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import HeadSearch from "@/components/headSearch/headSearch";

const services = [
    {
        image: "/recycling.jpg",
        title: "Recycling",
        icon: <FontAwesomeIcon icon={faRecycle}/>,
        textFirst: "Partner",
        textSecond: "[Partner Company Name]",
        expanded: "recycling is great",
        index: 0,
    },
    {
        image: "/maintenance.jpg",
        title: "Maintenance",
        icon: <FontAwesomeIcon icon={faHandHoldingMedical}/>,
        textFirst: "Duration",
        textSecond: "[Included Services]",
        expanded: "maintenance is great",
        index: 1,
    },
    {
        image: "/peripherals.jpg",
        title: "Peripherals",
        icon: <FontAwesomeIcon icon={faComputerMouse}/>,
        textFirst: "Equipment",
        textSecond: "[Price] €",
        expanded: "peripherals are great",
        index: 2,
    },
    {
        image: "/dataRecovery.jpg",
        title: "Data Recovery",
        icon: <FontAwesomeIcon icon={faBackward}/>,
        textFirst: "Partner",
        textSecond: "[Partner Company Name]",
        expanded: "recovery is great",
        index: 3,
    },
    {
        image: "/installation.jpg",
        title: "Installation",
        icon: <FontAwesomeIcon icon={faDownload}/>,
        textFirst: "Software",
        textSecond: "[Variation]",
        expanded: "installation is great",
        index: 4,
    },
    {
        image: "/warranty.jpg",
        title: "Warranty",
        icon: <FontAwesomeIcon icon={faHandHoldingHand}/>,
        textFirst: "Duration",
        textSecond: "[Included]",
        expanded: "warranty is great",
        index: 5,
    },
];

const Service = () => {
    const [expandedService, setExpandedService] = useState(null);

    const handleServiceClick = (index: any) => {
        setExpandedService(expandedService === index ? null : index);
    };

    return (
        <>
            <SidebarLeft selectedIndex={3}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className="grow">
                    <h2 className="text-2xl font-semibold mb-4">Our Extra Services</h2>
                    <ul className="grid grid-cols-1 gap-4">
                        {services.map((service) => (
                            <li key={service.index}>
                                <div
                                    className="block bg-zinc-800 rounded-md w-full overflow-hidden pb-4 shadow-lg cursor-pointer"
                                    onClick={() => handleServiceClick(service.index)}
                                >
                                    <div
                                        className="w-full h-40 bg-center bg-cover relative"
                                        style={{backgroundImage: `url(${service.image})`}}
                                    >
                                        <div
                                            className="absolute grid grid-cols-2 left-1/2 -translate-x-1/2 bottom-2 w-5/6 bg-white rounded-md items-center bg-opacity-30 backdrop-blur-md">
                      <span className="font-extrabold p-2 text-zinc-700 bg-white rounded-l-md bg-opacity-60">
                        {service.title}
                      </span>
                                            <span
                                                className="text-right font-extrabold p-2 text-zinc-700 bg-white rounded-r-md bg-opacity-60">
                        {service.icon}
                      </span>
                                            <div className="p-3">
                                                <>
                                                    <h3 className="font-bold text-red-700">{service.textFirst}</h3>
                                                    <span className="text-red-700 font-semibold">
                            {service.textSecond}
                          </span>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={"grid grid-cols-2"}>
                    <h3 className="font-semibold text-lg px-3 mt-2">
                      {service.title}
                    </h3>
                    <div className={"text-right"}>
                      <button
                          className={"p-1 mr-3 mt-3 rounded-md active:border"}
                          onClick={() => handleServiceClick(service.index)}
                      >
                        All Info
                        <FontAwesomeIcon icon={faArrowDown} className={"ml-2"}/>
                      </button>
                    </div>
                  </span>
                                </div>
                                {expandedService === service.index && (
                                    <div className="mt-2">{service.expanded}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <SidebarRight/>
            </div>
        </>
    );
};

export default Service;
