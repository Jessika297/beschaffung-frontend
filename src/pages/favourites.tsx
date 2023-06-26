import SidebarRight from "../../components/sidebarRight/sidebarRight";
import SidebarLeft from "../../components/sidebarLeft/sidebarLeft";
import HeadSearch from "../../components/headSearch/headSearch";

export default function Favourites() {
    return (
        <>
            <SidebarLeft selectedIndex={2}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className=" grow ">
                    favourites
                </div>
                <SidebarRight/>
            </div>
        </>
    );
}