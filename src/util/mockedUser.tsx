import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackward,
    faComputerMouse,
    faDownload,
    faHandHoldingHand,
    faHandHoldingMedical,
    faRecycle
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Datenbankschema {
    "id": string,
    "name": string,
    "description": string,
    "pictureUrl": string,
    "price": number,
    "gpu": {
        "id": string,
        "name": string,
        "description": string,
        "count": number
    },
    "ram": {
        "id": string,
        "name": string,
        "description": string,
        "size": string,
        "count": number
    },
    "psu": {
        "id": string,
        "name": string,
        "description": string,
        "consumption": string,
        "count": number
    },
    "cpu": {
        "id": string,
        "name": string,
        "description": string,
        "count": number
    },
    "storage": {
        "id": string,
        "name": string,
        "description": string,
        "size": string,
        "count": number
    },
    "mainboard": {
        "id": string,
        "name": string,
        "description": string,
        "count": number
    },
    "isAvailable": boolean
}

export const services = [
    {
        image: "/recycling.jpg",
        title: "Recycling",
        icon: <FontAwesomeIcon icon={faRecycle}/>,
        textFirst: "Our Partner recycling services are available for you.",
        textSecond: "Stadtreinigung Hamburg",
        expanded: "Your drop-off points for bulky waste, green waste, recyclables, and hazardous materials are our recycling centers. You can also get rid of hazardous materials through our Mobile Hazardous Waste Collection. Many items can be dropped off for free at the recycling centers.",
        index: 0,
    },
    {
        image: "/maintenance.jpg",
        title: "Maintenance",
        icon: <FontAwesomeIcon icon={faHandHoldingMedical}/>,
        textFirst: "We offer a standard maintenance time for 1 Year",
        textSecond: "Hotline, repairing, all Problems",
        expanded: "You can get extra Maintenance time for 2, 5 or 10 Years.",
        index: 1,
    },
    {
        image: "/peripherals.jpg",
        title: "Peripherals",
        icon: <FontAwesomeIcon icon={faComputerMouse}/>,
        textFirst: "Get the new Asus ROG Strix XG49VQ Monitor 49 Zoll",
        textSecond: "Get 10% off with every purchase of a PC + Mouse + Keyboard",
        expanded: "Just put the items in your cart and we will send you an offer, where you can see the discount",
        index: 2,
    },
    {
        image: "/dataRecovery.jpg",
        title: "Data Recovery",
        icon: <FontAwesomeIcon icon={faBackward}/>,
        textFirst: "Lost your data? We got you covered!",
        textSecond: "Heisen's Data Recovery Service",
        expanded: "Mybe just safe the data better next time",
        index: 3,
    },
    {
        image: "/installation.jpg",
        title: "Installation",
        icon: <FontAwesomeIcon icon={faDownload}/>,
        textFirst: "We can install the Software you need",
        textSecond: "Make your PC a Plug and Work",
        expanded: "Just put the Installation in your cart and list the needed software, we will send you an offer, don't worry we will discuss this point again in the future, so every detail is clear",
        index: 4,
    },
    {
        image: "/warranty.jpg",
        title: "Warranty",
        icon: <FontAwesomeIcon icon={faHandHoldingHand}/>,
        textFirst: "Standard warranty for 5 Years",
        textSecond: "You can book different warranty services",
        expanded: "Get our own warranty services",
        index: 5,
    },
];
