<template>
  <aside>
    <router-link to="/demo">demo</router-link>
    
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