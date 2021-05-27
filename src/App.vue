<template>
    <div class="app">
        <Sider />
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import Sider from './views/Sider.vue'
import { provideContextMenu } from './plugins/context-menu'
import store from './store'

export default defineComponent({
    name: 'App',
    components: {
        Sider
    },
    setup() {
        // 全局store注入
        Object.entries(store).forEach(([key, value]) => {
            provide(key, value)
        })

        provideContextMenu({
            log: {
                text: '打印（provide）',
                run() {
                    console.log('打印')
                }
            }
        })
    }
})
</script>

<style lang="less">
html,
body {
    height: 100%;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    height: 100%;
}
</style>
<style lang="less" scoped>
html[data-theme='dark'] {
    main {
        background-color: #222;
        color: #999;
    }
}
.app {
    display: flex;
    height: 100%;
    flex: auto;
}
main {
    flex: auto;
    padding: 20px;
    transition: all 0.5s;
}
</style>
