import { ref } from 'vue'

const namespace = 'counter'

const r = (ac: string) => `store/${namespace}/${ac}`

export const GETTER_COUNTER = r('GETTER_COUNTER')
export const ADD = r('ADD')

const storeModel = () => {
    const counter = ref(0)

    const add = () => {
        counter.value++
    }

    return {
        [GETTER_COUNTER]: counter,
        [ADD]: add
    }
}

export default storeModel()
