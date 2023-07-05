import React, {useState} from 'react';

export default function Contents() {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div onClick={handleExpand} className={'cursor-pointer'}>
            <div className="p-3">
                <div
                    className={`w-full rounded-md bg-center bg-cover flex flex-col justify-center px-4 ${
                        expanded ? ' h-64' : 'h-40 overflow-hidden'
                    }`}
                    style={{
                        backgroundImage: 'url(/techHexagon.jpg)',
                    }}
                >
                    <h1 className="text-2xl font-bold px-3 mt-3">OUR GOAL</h1>
                    <h2
                        className={`px-3 py-1 mt-2 text-xl text-black font-bold bg-white bg-opacity-50 rounded-md${
                            expanded ? 'max-h-full' : 'max-h-16 overflow-hidden'
                        }`}
                    >
                        Here at <span
                        className={'font-bold text-xl text-center text-purple-900 bg-white bg-opacity-40 rounded-md p-0.5'}>Kraut
                        und Rüben GmbH</span>, our goal is to provide top-notch services and solutions to meet
                        your technology needs.
                    </h2>
                    {expanded &&
                        <h2
                            className={`px-3 py-1 text-lg font-bold text-black bg-white bg-opacity-50 rounded-md border-t`}
                        >
                            Whether you require recycling of old hardware, maintenance of your devices,
                            peripherals,
                            data recovery, software installation, or extended warranty, we've got you covered. Our
                            dedicated
                            team of
                            professionals is committed to delivering exceptional customer service and ensuring your
                            satisfaction every
                            step of the way. Experience the excellence of Kraut und Rüben GmbH today!
                        </h2>}
                </div>
            </div>
        </div>
    );
}
