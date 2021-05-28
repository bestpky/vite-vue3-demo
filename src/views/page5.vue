<script lang="ts">
import { defineComponent, h, inject } from 'vue'
import { counterStoreKey } from '../store/counter'
import { userStoreKey } from '../store/users'

const Child1 = defineComponent({
    setup() {
        const counterStore = inject(counterStoreKey)
        const userStore = inject(userStoreKey)
        userStore?.getUser().then(user => user && userStore?.setUser(user))
        return {
            counter: counterStore?.counter,
            user: userStore?.user
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
        const counterStore = inject(counterStoreKey)
        const userStore = inject(userStoreKey)
        return {
            add: counterStore?.add,
            setUser: userStore?.setUser
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
                        setUser &&
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
