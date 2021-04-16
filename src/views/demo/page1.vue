<template>
  <div class="wrapper">
    <LazyImage :src="img" v-for="(img, i) in imgs" :key="i"/>
  </div>
  
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import LazyImage from '../../components/LazyImage.vue'
import vuelogo from '../../assets/logo.png'

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
  overflow: scroll;
  height: 100%;
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>