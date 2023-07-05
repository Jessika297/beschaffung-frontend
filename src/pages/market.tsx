import Head from "next/head";
import HeadSearch from "@/components/headSearch/headSearch";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import SidebarRight from "@/components/sidebarRight/sidebarRight";
import ShopItems from "@/components/shopItems/shopItems";
import {items} from "@/util/mockedData";

export default function Sale({ItemsProps}: any) {
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
                    <ShopItems items={ItemsProps}/>
                </div>
                <SidebarRight/>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const oneHour = 3600;
    try {
        const actualItemsResponse = await fetch('http://5.75.178.245:4862/computer');
        console.log(actualItemsResponse);
        const actualItems = await actualItemsResponse.json();
        return {
            props: {
                ItemsProps: actualItems,
            },
            revalidate: oneHour,
        };
    } catch (error) {
        return {
            props: {
                ItemsProps: items,
            },
            revalidate: oneHour,
        };
    }
}
