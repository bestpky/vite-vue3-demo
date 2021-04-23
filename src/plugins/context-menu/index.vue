<template>
  <div :style="{left, top}" class="context-menu" ref="menu">
  <li v-for="command in commands_" :key="command.key" @click="command.run">{{command.text}}</li>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    commands: Object,
    position: {
      type: Array as () => number[],
      default: [0, 0]
    }
  },
  setup(props) {
    const menu = ref<HTMLDivElement>()
    const _position = computed(() => {
      return [props.position[0], props.position[1]]
    })

    const commands_ = computed(() => {
      if (!props.commands) {
         return []
      }
      return Object.entries(props.commands).reduce((memo, [key, value]) => {
        memo.push({
          key,
          ...value
        })
        return memo
      }, [])
    })
    return {
      menu,
      commands_,
      left: `${_position.value[0]}px`,
      top: `${_position.value[1]}px`
    }
  },
})
</script>

<style lang="less" scoped>
.context-menu {
  position: fixed;
  width: 140px;
  padding: 4px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
}

li {
  cursor: pointer;
  padding: 5px 8px;
  color: rgb(12, 97, 196);
  &:hover {
    background-color: rgba(164, 170, 187, 0.4);
    color: teal;
  }
}
</style>