import { ref, InjectionKey } from 'vue'

export const storeKey: InjectionKey<ReturnType<typeof storeModel>> = Symbol('user')
export const userStoreKey = storeKey
export interface User {
    name: string
    age: number
}

const storeModel = () => {
    const user = ref<User | null>(null)

    const getUser = () => {
        return new Promise<User>(resolve => {
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
        user,
        getUser,
        setUser
    }
}

export default storeModel()
