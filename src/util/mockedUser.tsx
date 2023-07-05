interface Datenbankschema {
    "id": string,
    "name": string,
    "description": string,
    "pictureUrl": string,
    "price": number,
    "gpu": {
        "id": string,
        "name": string,
        "description": string | null,
        "count": number | null
    },
    "ram": {
        "id": string,
        "name": string,
        "description": string | null,
        "size": string | null,
        "count": number | null
    },
    "psu": {
        "id": string,
        "name": string,
        "description": string | null,
        "consumption": string | null,
        "count": number | null
    },
    "cpu": {
        "id": string,
        "name": string,
        "description": string | null,
        "count": number | null
    },
    "storage": {
        "id": string,
        "name": string,
        "description": string | null,
        "size": string | null,
        "count": number | null
    },
    "mainboard": null,
    "isAvailable": boolean
}
