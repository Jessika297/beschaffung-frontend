import Link from "next/link";

export default function Contents() {
    return (
        <>
            <h1 className="text-2xl font-bold px-3 mt-3">Dashboard</h1>
            <h2 className="text-zinc-500 px-3">
                Buy hardware and full computer systems
            </h2>
            <div className="p-3">
                <div
                    className="w-full h-44 rounded-md bg-center bg-cover flex flex-col justify-center px-4"
                    style={{
                        backgroundImage: 'url(/techHexagon.jpg)',
                    }}
                >
                    <h2 className="font-bold text-3xl max-w-sm">
                        Click below to <br/> see all hardware
                    </h2>
                    <Link href="/market">
                        <div
                            className="text-center font-bold py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3">
                            Explore Now
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between px-3 mt-3">
                <h2 className="text-xl font-semibold">Special Offers</h2>
            </div>
        </>
    );
}
