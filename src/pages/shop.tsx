import SidebarRight from "../../components/sidebarRight/sidebarRight";
import SidebarLeft from "../../components/sidebarLeft/sidebarLeft";
import Items from "../../components/items/items";
import HeadSearch from "../../components/headSearch/headSearch";
import Contents from "../../components/contents/contents";

export default function Shop() {
    return (
        <>
            <SidebarLeft/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className=" grow ">
                    <Contents/>
                    <Items/>
                </div>
                <SidebarRight/>
            </div>
        </>
    );
}
