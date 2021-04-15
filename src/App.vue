<template>
  <aside>
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
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
aside {
  flex-basis: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  a {
    text-align: center;
  }
}
main {
  flex: auto;
}
</style>