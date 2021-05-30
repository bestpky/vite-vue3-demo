import { App } from 'vue'

export function createStore() {
    return {
        install(app: App) {
            const contexts = import.meta.globEager('./*.ts')
            Object.keys(contexts).forEach(key => {
                app.provide(contexts[key].storeKey, contexts[key].default)
            })
        }
    }
}
