<script lang="ts">
import { defineComponent, h, inject, Ref } from 'vue'
import { GETTER_COUNTER, ADD } from '../store/counter'
import { GETTER_USER, GET_USER, SET_USER, User } from '../store/users'

const Child1 = defineComponent({
    setup() {
        const counter = inject<number>(GETTER_COUNTER)
        const user = inject<User>(GETTER_USER)
        const getUser = inject<() => Promise<User>>(GET_USER)
        const setUser = inject<(user: User) => void>(SET_USER)
        if (getUser && setUser) {
            getUser().then(user => user && setUser(user))
        }
        return {
            counter,
            user
        }
    },
    render() {
        const { counter, user } = this
        return h('div', [
            h('h3', '子组件1'),
            h('span', counter),
            h('div'),
            [h('div', `name: ${user?.name}`), h('div', `age: ${user?.age}`)],
            h('hr')
        ])
    }
})
const Child2 = defineComponent({
    setup() {
        const add = inject<() => void>(ADD)
        const setUser = inject<(user: User) => void>(SET_USER)!
        return {
            add,
            setUser
        }
    },
    render() {
        const { add, setUser } = this
        return h('div', [
            h('h3', '子组件2'),
            h('button', { onclick: add }, 'add'),
            h(
                'button',
                {
                    onclick: () =>
                        setUser({
                            name: '李四',
                            age: 20
                        })
                },
                'setUser'
            )
        ])
    }
})

export default defineComponent({
    components: {
        Child1,
        Child2
    },
    render() {
        return h('div', { class: 'test-class' }, [h(Child1), h(Child2)])
    }
})
</script>
