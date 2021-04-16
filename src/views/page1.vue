<template>

  <div class="wrapper scrollable scrollable-y">
    <LazyImage class="lazy-img" :src="img" v-for="(img, i) in imgs" :key="i"/>
  </div>
  
  
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import LazyImage from '../components/LazyImage.vue'
import vuelogo from '../assets/logo.png'

export default defineComponent({
  components: {
    LazyImage
  },
  setup() {
    const imgs = ref<string[]>([])
    imgs.value = Array.from({length: 100}, () => vuelogo)
    return {
      imgs
    }
  }
})
</script>
<style lang="less" scoped>
.wrapper {
  margin: 0 auto;
  border: 1px solid #ccc;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.lazy-img {
  width: 200px;
  height: 200px;
}
</style>