<template>
  <aside>
    <router-link to="/page1">懒加载</router-link>
    <router-link to="/page2">鼠标右键插件</router-link>
    <router-link to="/page3">自动省略</router-link>
    <router-link to="/page4">拖拽排序</router-link>
  </aside>
</template>


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
</style>