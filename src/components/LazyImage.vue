<template>
  <div class="el-image" ref="root">
    <template v-if="loading">
      <div class="img-loading">loading</div>
    </template>
    <img v-else class="el-image__inner" :src="src_" alt="">
  </div>
</template>
<script lang="ts">
import {defineComponent, getCurrentInstance, ref, onMounted, reactive, toRefs, watch,} from 'vue'
import loadImage from '../utils/load-image'
import {FileLike} from '../utils/is-file-like'

const observeVm = new WeakMap();
const io = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    console.log(entry.intersectionRatio,i)
    if (entry.intersectionRatio > 0) {
      const vm = observeVm.get(entry.target);
      vm.entry = true;
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
});

export default defineComponent({
  props:{
    src: {
      type: String,
      required: true
    },

  },
  setup(props, {}){
    const root = ref()
    const state = reactive({
      src_: '',
      loading: false,
      entry: false,
      imageWidth: 0,
      imageHeight: 0,
    })

    async function _loadImage(src: string) {
      try {
        state.loading = true;
        const img = await loadImage(src);
        state.imageWidth = img.width;
        state.imageHeight = img.height;
        state.src_=src
      } finally {
        state.loading = false;
      }
    }

    function addLazyLoadListener() {
      if (!observeVm.has(root.value)) {
        observeVm.set(root.value, getCurrentInstance()!.proxy);
        io.observe(root.value);
      }
    }

    onMounted(() => {
      addLazyLoadListener()
      watch(() => ({src: props.src, entry: state.entry}), ({src, entry}) => {
        if (src && entry) {
          _loadImage(src);
        }
      })
    })

    return {
      root,
      ...toRefs(state)
    }
  }
})
</script>
<style lang="less" scoped>

.el-image {
  width: 100%;
  height: 100%;
  color: #909399;
}
</style>