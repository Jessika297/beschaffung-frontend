import {artists} from "@/util/mockedData";

export default function SidebarRight() {
    return (
        <div className="p-3 md:w-72 shrink-0 md:sticky md:top-16 shrink-0 h-full">
            <h2 className="text-xl font-semibold">Top Artists</h2>
            <ul className="mt-3 space-y-3">
                {artists.map(({name, handler, image}) => (
                    <li
                        className="bg-zinc-800 rounded-md p-2 flex shadow-lg"
                        key={handler}
                    >
                        <img
                            src={image}
                            className="w-12 h-12 rounded-md"
                            alt={`top artist ${name}`}
                        />
                        <div className="ml-3">
                            <h3 className="font-semibold">{name}</h3>
                            <p className="text-sm text-zinc-400">{handler}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div
                className="w-full rounded-md bg-gradient-to-tr from-fuchsia-600 to-violet-600 mt-3 p-3 relative overflow-hidden">
                <div className="z-10 relative">
                    <h2 className="text-white font-semibold">
                        Buy a collection with ethereum
                    </h2>
                    <p className="text-white/50 text-sm mt-1 ">
                        you can buy a collection of artwork with ethereum very easy and
                        simple
                    </p>
                    <button className="bg-white w-full rounded-md h-12 text-gray-900 font-semibold mt-2">
                        Get Started
                    </button>
                </div>
                <div className="absolute left-0 right-0 top-0 z-0">
                    <svg
                        className="w-full"
                        viewBox="0 0 679 360"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_2_2)">
                            <path
                                d="M102.854 22L159.666 116.276L102.854 90.4544V22Z"
                                fill="#8A92B2"
                                fillOpacity="0.35"
                            />
                            <path
                                d="M102.854 90.4544L159.666 116.276L102.854 149.866V90.4544Z"
                                fill="#62688F"
                                fillOpacity="0.35"
                            />
                            <path
                                d="M46.0315 116.276L102.854 22V90.4544L46.0315 116.276Z"
                                fill="#62688F"
                                fillOpacity="0.35"
                            />
                            <path
                                d="M102.854 149.866L46.0315 116.276L102.854 90.4544V149.866Z"
                                fill="#454A75"
                                fillOpacity="0.35"
                            />
                            <path
                                d="M159.666 127.055L102.854 207.12V160.625L159.666 127.055Z"
                                fill="#8A92B2"
                                fillOpacity="0.35"
                            />
                            <path
                                d="M102.854 160.625V207.12L46 127.055L102.854 160.625Z"
                                fill="#62688F"
                                fillOpacity="0.35"
                            />
                            <circle
                                cx="552"
                                cy="35"
                                r="132"
                                stroke="white"
                                strokeOpacity="0.1"
                                strokeWidth="10"
                            />
                            <circle
                                cx="640"
                                cy="115"
                                r="132"
                                stroke="white"
                                strokeOpacity="0.1"
                                strokeWidth="10"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_2">
                                <rect width="679" height="360" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}
