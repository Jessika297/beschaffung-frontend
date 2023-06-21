import {Component} from "react";
import {artists, items} from "../../util/mockedData";
import Countdown from "react-countdown";
import HeadSearch from "../../components/headSearch/headSearch";
import Content from "../../components/content/content";
import Items from "../../components/items/items";
import SidebarRight from "../../components/sidebarRight/sidebarRight";
import SidebarLeft from "../../components/sidebarLeft/sidebarLeft";

export default function Shop() {
    return (
        <>
            <SidebarLeft/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className=" grow ">
                    <Content/>
                    <Items/>
                </div>
                <SidebarRight/>
            </div>
        </>
    );
}
