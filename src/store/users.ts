import { ref } from 'vue'

export interface User {
    name: string
    age: number
}

const namespace = 'user'

const r = (ac: string) => `store/${namespace}/${ac}`

export const GETTER_USER = r('GETTER_USER')
export const GET_USER = r('GET_USER')
export const SET_USER = r('SET_USER')

const storeModel = () => {
    const user = ref<User | null>(null)

    const getUser = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    name: '张三',
                    age: 18
                })
            }, 2000)
        })
    }

    const setUser = (_user: User) => {
        user.value = _user
    }

    return {
        [GETTER_USER]: user,
        [GET_USER]: getUser,
        [SET_USER]: setUser
    }
}

export default storeModel()
