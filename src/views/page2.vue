<template>
  <div @click="closeContextMenu">
    <div :style="{background}" @contextmenu.stop.prevent="openContextMenu" class="block"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {useContextMenu} from '../plugins/context-menu'

export default defineComponent({
  setup() {
    const cm = useContextMenu()
    const background = ref()
    let cancelFunc: () => void
    function openContextMenu(e: MouseEvent) {
      cancelFunc = cm(e, {
        changeColor: {
          text: '变色（inject）',
          run() {
            background.value = background.value === 'red' ? '#ff0' : 'red'
          }
        }
      })
    }
    function closeContextMenu() {
      cancelFunc()
    }
    return {
      openContextMenu,
      background,
      closeContextMenu
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