import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Icons} from "@/util/mockedData";
import Link from "next/link";

interface MobileItemProp {
    text: string;
}

class MobileItem extends Component<MobileItemProp> {
    render() {
        const {text} = this.props;
        return (
            <>
                <Link href={"/" + [text]} className={`rounded-md border flex flex-col w-[30vw]`}>
                    <FontAwesomeIcon icon={Icons[text].icon} className={`m-2 mb-1`}/>
                    <p className={`m-2 uppercase text-center text-sm`}>{text}</p>
                </Link>
            </>
        );
    }
}

export default function MobileMenu({isMenuOpen}: { isMenuOpen: boolean }) {
    return (
        <div className={`grid grid-cols-3 place-items-center gap-2 p-1 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
            {[
                'market',
                'dashboard',
                'favourites',
                'trending',
                'sale',
                'wallet',
                'settings',
                'logout'
            ].map((key) => (
                <MobileItem key={key} text={key}/>
            ))}
        </div>
    );
}
