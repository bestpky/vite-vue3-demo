<template>
    <Sider/>
    <main>
      <router-view></router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sider from './views/Sider.vue'
import './common.less'
import {provideContextMenu} from './plugins/context-menu'

export default defineComponent({
  name: 'App',
  components: {
    Sider
  },
  setup() {
    provideContextMenu({
      log: {
        text: '打印',
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
main {
  flex: auto;
}
</style>