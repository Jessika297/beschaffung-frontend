import Head from "next/head";
import HeadSearch from "@/components/headSearch/headSearch";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import SidebarRight from "@/components/sidebarRight/sidebarRight";
import ShopItems from "@/components/shopItems/shopItems";

export default function Sale() {
    return (
        <>
            <Head>
                <title>Beschaffung</title>
            </Head>
            <SidebarLeft selectedIndex={0}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className=" grow ">
                    <ShopItems/>
                </div>
                <SidebarRight/>
            </div>
        </>
    )
}
