import Head from "next/head";
import HeadSearch from "@/components/headSearch/headSearch";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import Imprint from "@/imprint/imprint";

export default function Sale() {
    return (
        <>
            <Head>
                <title>Beschaffung</title>
            </Head>
            <SidebarLeft selectedIndex={6}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row md:mr-28">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className=" grow ">
                    <Imprint/>
                </div>
            </div>
        </>
    )
}
