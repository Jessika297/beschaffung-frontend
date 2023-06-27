import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Icons} from "@/util/mockedData";
import Link from "next/link";

interface MobileItemProp {
    text: string;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

class MobileItem extends Component<MobileItemProp> {
    render() {
        const {text, setIsMenuOpen} = this.props;
        const handleLogout = () => {
            console.log('logged out')
            setIsMenuOpen(false)
        }
        const switchLinks = () => {
            switch (text) {
                case "dashboard" :
                    return <Link href={"/"} className={`rounded-md border flex flex-col w-[30vw] py-1`}
                                 onClick={() => setIsMenuOpen(false)}>
                        <FontAwesomeIcon icon={Icons[text].icon} className={`m-2 mb-1`}/>
                        <p className={`m-2 uppercase text-center text-sm`}>{text}</p>
                    </Link>
                case "logout" :
                    return <Link href={"/"} className={`rounded-md border flex flex-col w-[30vw] py-1`}
                                 onClick={handleLogout}>
                        <FontAwesomeIcon icon={Icons[text].icon} className={`m-2 mb-1`}/>
                        <p className={`m-2 uppercase text-center text-sm`}>{text}</p>
                    </Link>
                case "close":
                    return <span className={`rounded-md border flex flex-col w-[30vw] py-1`}>
                            <button
                                onClick={() => setIsMenuOpen(false)}>
                                <FontAwesomeIcon icon={Icons[text].icon} className={`m-2 mb-1`}/>
                                <p className={`m-2 uppercase text-center text-sm`}>{text}</p>
                            </button>
                    </span>
                default:
                    return <Link href={"/" + [text]} className={`rounded-md border flex flex-col w-[30vw] py-1`}
                                 onClick={() => setIsMenuOpen(false)}>
                        <FontAwesomeIcon icon={Icons[text].icon} className={`m-2 mb-1`}/>
                        <p className={`m-2 uppercase text-center text-sm`}>{text}</p>
                    </Link>
            }
        }
        return (
            <>
                {switchLinks()}
            </>
        );
    }
}

export default function MobileMenu({isMenuOpen, setIsMenuOpen}: {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <div className={`grid grid-cols-3 place-items-center gap-2 p-1md:hidden 
        ${isMenuOpen ? '' : 'hidden'}`}>
            {[
                'market',
                'dashboard',
                'favourites',
                'trending',
                'sale',
                'wallet',
                'settings',
                'logout',
                'close'
            ].map((key) => (
                <MobileItem key={key} text={key} setIsMenuOpen={setIsMenuOpen}/>
            ))}
        </div>
    );
}
