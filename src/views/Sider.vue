<template>
    <aside>
        <div>
            <router-link to="/page1">懒加载</router-link>
            <router-link to="/page2">鼠标右键插件</router-link>
            <router-link to="/page3">自动省略</router-link>
            <router-link to="/page4">拖拽排序</router-link>
            <router-link to="/page5">provide/inject状态管理</router-link>
        </div>
        <footer>
            <a-switch @change="switchTheme" :checked="isDark" />
        </footer>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from '../utils/composables/use-theme'

export default defineComponent({
    setup() {
        const { switchTheme, isDark } = useTheme()
        return {
            switchTheme,
            isDark
        }
    }
})
</script>

<style lang="less" scoped>
html[data-theme='dark'] {
    aside {
        background-color: #323232;
    }
}

aside {
    flex-basis: 200px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 5px 0px 5px #f5f5f5;
    padding: 20px 0;
    transition: all 0.5s;
    > div:first-of-type {
        display: flex;
        flex-direction: column;
    }
    a {
        text-align: center;
        margin-bottom: 20px;
    }
}
footer {
    text-align: center;
}
</style>
