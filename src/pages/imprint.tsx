import SidebarRight from "@/components/sidebarRight/sidebarRight";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import HeadSearch from "@/components/headSearch/headSearch";

export default function Imprint() {
    return (
        <>
            <SidebarLeft selectedIndex={6}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className="w-1/2 text-center mt-3">
                    Herr Kraut <br/>
                    Frau Rüben <br/>
                    Dr GmbH
                </div>
                <div className={'w-1/2 text-center mt-3'}>Kraut und Rüben GmbH</div>
                <SidebarRight/>
            </div>
        </>
    );
}
