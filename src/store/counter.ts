import { ref, InjectionKey } from 'vue'

export const storeKey: InjectionKey<ReturnType<typeof storeModel>> = Symbol('counter')
export const counterStoreKey = storeKey

const storeModel = () => {
    const counter = ref(0)

    const add = () => {
        counter.value++
    }

    return {
        counter,
        add
    }
}

export default storeModel()
