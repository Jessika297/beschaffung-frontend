import Head from "next/head";
import HeadSearch from "@/components/headSearch/headSearch";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import Items from "@/components/items/items";
import SidebarRight from "@/components/sidebarRight/sidebarRight";

export default function Sale() {
    return (
        <>
            <Head>
                <title>Beschaffung</title>
            </Head>
            <SidebarLeft selectedIndex={4}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className=" grow ">
                    <Items homepage={false}/>
                </div>
                <SidebarRight/>
            </div>
        </>
    )
}
