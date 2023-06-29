import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartArrowDown, faChevronDown, faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import MobileMenu from "@/components/mobileMenu/mobileMenu";
import Link from "next/link";

export default function HeadSearch() {
    const [isSearchSelected, setIsSearchSelected] = useState(false);
    const [isProfileMenuSelected, setIsProfileMenuSelected] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        console.log('Logout');
        setIsProfileMenuSelected(false)
    }

    const renderProfileMenu = () => {
        return (
            <div className="flex items-center order-2 md:order-3 pl-0 md:pl-3 relative">
                <Link href="/wallet" className="py-2 flex items-center text-zinc-500">
                        <span
                            className="bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md active:border active:text-white">
                            <FontAwesomeIcon icon={faCartArrowDown}/>
                        </span>
                </Link>
                <img src="/img.png" alt="user" className="w-10 h-10 rounded-full ml-4"/>
                <button
                    className="h-7 w-7 ml-4 active:border rounded-md"
                    onClick={() => setIsProfileMenuSelected(!isProfileMenuSelected)}
                >
                    {isProfileMenuSelected ? (
                        <FontAwesomeIcon icon={faXmark}/>
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown}/>
                    )}
                </button>
                <div
                    className={`absolute mt-2 py-2 w-full overflow-hidden rounded-md bg-white top-full flex flex-col ${
                        !isProfileMenuSelected && "hidden"
                    }`}
                >
                    <Link href={'/settings'}
                          className="text-sm py-2 px-3 font-medium text-gray-600 cursor-pointer hover:bg-slate-100">
                        Profile Settings
                    </Link>
                    <Link href={'/wallet'}
                          className="text-sm py-2 px-3 font-medium text-gray-600 cursor-pointer hover:bg-slate-100">
                        Shopping cart
                    </Link>
                    <Link href={'/'}
                          className="text-sm py-2 px-3 font-medium text-gray-600 cursor-pointer hover:bg-slate-100"
                          onClick={handleLogout}>Logout
                    </Link>
                </div>
            </div>
        )
    }

    const renderSearchInput = () => {
        return (
            <div className="flex mt-4 md:mt-0 order-3 md:order-2 w-full grow md:w-fit">
                <button
                    className={`w-10 h-10 rounded-md bg-zinc-700 grid place-items-center mr-2 md:hidden`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <FontAwesomeIcon icon={faXmark}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                    )}
                </button>
                <div className="relative grow md:max-w-lg">
                    <input
                        className="bg-zinc-700 pl-3 pr-10 h-10 rounded-md w-full text-white text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                        onBlur={() => setIsSearchSelected(false)}
                        onFocus={() => setIsSearchSelected(true)}
                    />
                    <button type="submit" className="text-white absolute right-0 top-0 mt-2 mr-4">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                    <div
                        className={`absolute mt-2 w-full overflow-hidden rounded-md bg-white ${!isSearchSelected && "hidden"}`}
                    >
                        <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                            <p className="text-sm font-medium text-gray-600">Button Ripple Effect</p>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                adipisicing...</p>
                        </div>
                        <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                            <p className="text-sm font-medium text-gray-600">Custom Radio Buttons</p>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                adipisicing...</p>
                        </div>
                        <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                            <p className="text-sm font-medium text-gray-600">Expand Images on Hover</p>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                adipisicing...</p>
                        </div>
                        <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                            <p className="text-sm font-medium text-gray-600">Custom Checkbox</p>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                adipisicing...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderCompaniesLogo = () => {
        return (
            <div className="flex items-center grow md:grow-0 md:w-48 relative">
                <img
                    src={"/krautUndRueben.jpg"}
                    alt={"logo"}
                    height={65}
                    width={65}
                    className="rounded-md"
                />
                <div
                    className="ml-2 font-bold text-xl text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800"
                >
                    Kraut und <br/>
                    Rüben
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-wrap p-3 items-center sticky top-0 bg-zinc-900 h-fit md:h-16 z-30">
                {renderSearchInput()}
                {renderCompaniesLogo()}
                {renderProfileMenu()}
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </>
    );
}
