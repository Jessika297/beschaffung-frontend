import React from "react";
import Link from "next/link";
import {services} from "@/util/mockedUser";

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
