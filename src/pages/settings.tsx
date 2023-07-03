import SidebarRight from "@/components/sidebarRight/sidebarRight";
import SidebarLeft from "@/components/sidebarLeft/sidebarLeft";
import HeadSearch from "@/components/headSearch/headSearch";

export default function Settings({mock}: any) {
    const employeeList = mock?._embedded?.employeeList;

    return (
        <>
            <SidebarLeft selectedIndex={5}/>
            <HeadSearch/>

            <div className="flex flex-col md:flex-row">
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className="grow">
                    {employeeList ? (
                        employeeList.map((employee: any) => (
                            <div key={employee.id}>{employee.name}</div>
                        ))
                    ) : (
                        <div>Nicht erreichbar</div>
                    )}
                </div>
                <SidebarRight/>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const oneHour = 3600;
    try {
        const actualItemsResponse = await fetch('http://localhost:8080/employees');
        const actualMock = await actualItemsResponse.json();
        return {
            props: {
                mock: actualMock,
            },
            revalidate: oneHour,
        };
    } catch (error) {
        return {
            props: {
                mock: null,
            },
            revalidate: oneHour,
        };
    }
}
