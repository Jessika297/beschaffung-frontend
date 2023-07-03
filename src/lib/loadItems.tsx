export async function loadItems() {
    const actualItemsResponde = await fetch('url')
    return await actualItemsResponde.json()
}
