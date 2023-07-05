import Head from "next/head";
import HeadSearch from "@/components/headSearch/headSearch";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import Contents from "@/components/contents/contents";
import SidebarRight from "@/components/sidebarRight/sidebarRight";
import React from "react";
import SpecialServices from "@/components/specialServices/specialServices";

export default function Home() {
    return (
        <>
            <Head>
                <title>Beschaffung</title>
            </Head>
            <SidebarLeft selectedIndex={1}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className="grow">
                    <Contents/>
                    <div className="flex flex-col md:flex-row justify-between px-3 mt-6">
                        <h2 className="text-xl font-semibold">Special Services</h2>
                    </div>
                    <SpecialServices/>
                </div>
                <SidebarRight/>
            </div>
        </>
    )
}
