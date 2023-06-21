import React, { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
// import {Icons} from "../../util/mockedData";

interface SidebarItemProps {
    text: string;
    index: number;
}

class SidebarItem extends Component<SidebarItemProps> {
    render() {
        const { text, index } = this.props;
        return (
            <>
                <li className="relative">
                    {index === 1 ? (
                        <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full"/>
                    ) : null}
                    <a
                        href="#"
                        className={`pl-4 flex items-center capitalize ${
                            index === 1 ? 'text-white' : 'text-zinc-500'
                        }`}
                    >
                        <span
                            className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
                                index === 1 ? 'bg-fuchsia-600' : 'bg-zinc-800'
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                {/*{Icons[text]()}*/}
                            </svg>
                        </span>
                        {/*{text}*/}
                    </a>
                </li>
            </>
        );
    }
}

export default function SidebarLeft() {
    return (
        <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
            <ul className="space-y-8">
                {[
                    'market',
                    'dashboard',
                    'favourites',
                    'trending',
                    'collection',
                    'wallet',
                    'settings',
                ].map((key, index) => (
                    <SidebarItem key={key} text={key} index={index}/>
                ))}
            </ul>
            <div className="pb-5  px-4">
                <hr className="mb-5 text-zinc-700"/>
                <a href="#" className="py-2 flex items-center  text-zinc-500">
                    <span className="bg-white w-8 h-8 grid place-items-center mr-2 rounded-md">
                        <FontAwesomeIcon icon={icon({name: 'user-secret'})}/>
                    </span>
                    Logout
                </a>
            </div>
        </div>
    );
}
