interface StoreItem {
    key: Symbol
    store: any
}
let stores: StoreItem[] = []

const contexts = import.meta.globEager('./*.ts')
Object.keys(contexts).forEach(key => {
    stores.push({
        key: contexts[key].storeKey,
        store: contexts[key].default
    })
})

export default stores
