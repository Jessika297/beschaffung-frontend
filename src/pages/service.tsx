import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

import SidebarRight from "@/components/sidebarRight/sidebarRight";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import HeadSearch from "@/components/headSearch/headSearch";
import {services} from "@/util/mockedUser";

const Service = () => {
    const [expandedService, setExpandedService] = useState(null);

    const handleServiceClick = (index: any) => {
        setExpandedService(expandedService === index ? null : index);
    };

    return (
        <>
            <SidebarLeft selectedIndex={2}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className="grow">
                    <h2 className="text-2xl font-semibold my-4">Our Extra Services</h2>
                    <ul className="grid grid-cols-1 gap-4">
                        {services.map((service) => (
                            <li id={service.title}>
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
                                            <div className="p-3 col-span-2">
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
                                    <div
                                        className="p-3 bg-zinc-800 rounded-b-md border-t">{service.expanded}</div>
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
