import React from "react";
import {Icons} from "@/util/mockedData";
import Link from "next/link";

interface SidebarItemProps {
    text: string;
    index: number;
    selectedIndex: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({text, index, selectedIndex,}) => {
    const isActive = index === selectedIndex;
    const itemClasses = `pl-4 flex items-center capitalize ${
        isActive ? "text-white" : "text-zinc-500"
    }`;
    const iconClasses = `bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
        isActive ? "bg-fuchsia-600" : "bg-zinc-800"
    }`;

    return (
        <li className="relative">
            {isActive && (
                <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full"/>
            )}
            <Link href={text === "dashboard" ? "/" : `/${text}`} className={itemClasses}>
          <span className={iconClasses}>
            {Icons[text]}
          </span>
                {text}
            </Link>
        </li>
    );
};

interface SidebarLeftProps {
    selectedIndex: number;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({selectedIndex}) => {
    const sidebarItems = [
        "market",
        "dashboard",
        "favourites",
        "trending",
        "sale",
        "wallet",
        "settings",
    ];

    return (
        <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
            <ul className="space-y-8">
                {sidebarItems.map((key, index) => (
                    <SidebarItem
                        key={key}
                        text={key}
                        index={index}
                        selectedIndex={selectedIndex}
                    />
                ))}
            </ul>
            <div className="pb-5  px-4">
                <hr className="mb-5 text-zinc-700"/>
                <Link href="/" className="py-2 flex items-center  text-zinc-500"
                      onClick={() => console.log('logged out')}>
          <span className="bg-white w-8 h-8 grid place-items-center mr-2 rounded-md">
            {Icons.logout}
          </span>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default SidebarLeft;
