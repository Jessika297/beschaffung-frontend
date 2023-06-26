import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Icons} from "../../util/mockedData";
import Link from "next/link";

interface SidebarItemProps {
    text: string;
    index: number;
    selectedIndex: number;
}

class SidebarItem extends Component<SidebarItemProps> {
    render() {
        const {text, index, selectedIndex} = this.props;
        return (
            <>
                <li className="relative">
                    {index === selectedIndex ? (
                        <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full"/>
                    ) : null}
                    <Link href={"/" + [text]} className={`pl-4 flex items-center capitalize ${
                        index === selectedIndex ? 'text-white' : 'text-zinc-500'
                    }`}>
                        <span
                            className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
                                index === selectedIndex ? 'bg-fuchsia-600' : 'bg-zinc-800'
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <FontAwesomeIcon icon={Icons[text].icon}/>
                            </svg>
                        </span>
                        {text}
                    </Link>
                </li>
            </>
        );
    }
}

export default class SidebarLeft extends Component<{ selectedIndex: number }> {
    render() {
        let {selectedIndex} = this.props;
        return (
            <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
                <ul className="space-y-8">
                    {[
                        'market',
                        'index',
                        'favourites',
                        'trending',
                        'collection',
                        'wallet',
                        'settings',
                    ].map((key, index) => (
                        <SidebarItem key={key} text={key} index={index} selectedIndex={selectedIndex}/>
                    ))}
                </ul>
                <div className="pb-5  px-4">
                    <hr className="mb-5 text-zinc-700"/>
                    <a href="#" className="py-2 flex items-center  text-zinc-500">
                    <span className="bg-white w-8 h-8 grid place-items-center mr-2 rounded-md">
                        <FontAwesomeIcon icon={Icons.logout.icon}/>
                    </span>
                        Logout
                    </a>
                </div>
            </div>
        );
    }
}
