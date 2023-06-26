import {Component} from "react";

class ArtworkSelector extends Component<{ text: any, index: any }> {
    render() {
        let {text, index} = this.props;
        return (
            <li className="">
                <button
                    className={` ${
                        index ? 'text-color' : 'text-style'
                    }`}
                >
                    {text}
                </button>
            </li>
        );
    }
}

export default function Contents() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold px-3 mt-3">Dashboard</h1>
            <h2 className="text-zinc-500 px-3">
                Buy and sell digital artwork, NFT collection
            </h2>
            <div className="p-3">
                <div
                    className="w-full h-44  rounded-md bg-center bg-cover flex flex-col justify-center px-4"
                    style={{
                        backgroundImage:
                            'url(https://assets.codepen.io/3685267/nft-dashboard-art-6.jpg)',
                    }}
                >
                    <h2 className="font-bold text-3xl max-w-sm">
                        Find a collection of best artwork here
                    </h2>
                    <button className="py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3">
                        Explore Now
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between px-3 mt-3">
                <h2 className="text-xl font-semibold">Trending Artworks</h2>
                <ul className="inline-flex space-x-3 ">
                    {['Art', 'Collectables', 'Music', 'Sport'].map((text, index) => (
                        <ArtworkSelector key={text} text={text} index={index}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}
