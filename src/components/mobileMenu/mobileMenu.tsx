import React from "react";
import {Icons} from "@/util/mockedData";
import Link from "next/link";

interface MobileItemProp {
    text: string;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileItem: React.FC<MobileItemProp> = ({text, setIsMenuOpen}) => {
    const handleLogout = () => {
        console.log('logged out');
        setIsMenuOpen(false);
    };

    const renderLink = () => (
        <Link
            href={["dashboard", "logout"].includes(text) ? "/" : `/${text}`}
            className="rounded-md border flex flex-col w-[30vw] py-1"
            onClick={() => text === "logout" ? handleLogout() : setIsMenuOpen(false)}
        >
            <div className={`m-2 mb-1 text-center`}> {Icons[text]} </div>
            <p className="m-2 uppercase text-center text-sm">{text}</p>
        </Link>
    );

    const renderButton = () => (
        <span className={`rounded-md border flex flex-col w-[30vw] py-1`}>
      <button onClick={() => setIsMenuOpen(false)}>
        <div className={`m-2 mb-1`}> {Icons[text]} </div>
        <p className={`m-2 uppercase text-center text-sm`}>{text}</p>
      </button>
    </span>
    );

    return <>{text === "close" ? renderButton() : renderLink()}</>;
};

const MobileMenu: React.FC<{
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({isMenuOpen, setIsMenuOpen}) => {
    const menuItems = [
        "market",
        "dashboard",
        "favourites",
        "trending",
        "sale",
        "wallet",
        "settings",
        "logout",
        "close",
    ];

    return (
        <div
            className={`grid grid-cols-3 place-items-center gap-2 p-1md:hidden ${
                isMenuOpen ? "" : "hidden"
            }`}
        >
            {menuItems.map((key) => (
                <MobileItem key={key} text={key} setIsMenuOpen={setIsMenuOpen}/>
            ))}
        </div>
    );
};

export default MobileMenu;
