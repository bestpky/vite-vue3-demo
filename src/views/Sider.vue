<template>
  <aside>
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
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