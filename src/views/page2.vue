<template>
  <div :style="{background}" @contextmenu.stop.prevent="handleContextMenu" class="block"></div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {useContextMenu} from '../plugins/context-menu'

export default defineComponent({
  setup() {
    const cm = useContextMenu()
    const background = ref()
    function handleContextMenu(e: MouseEvent) {
      cm(e, {
        changeColor: {
          text: '变色',
          run() {
            background.value = 'red'
          }
        }
      })
    }
    return {
      handleContextMenu,
      background
    }
  },
})
</script>

<style lang="less" scoped>
.block {
  background-color: #ff0;
  width: 200px;
  height: 200px;
}
</style>