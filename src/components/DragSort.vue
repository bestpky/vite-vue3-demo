<template>
  <transition-group tag='ul' name='list'>
    <li v-for="(item, i) in list_" :key="item[keyAttr]" :draggable="true"
     @dragstart="handleDragstart(item, i)"
     @dragenter="handleDragEnter(item, i)"
     @dragend="handleDragEnd(item, i)"
     @dragover="(e) => e.preventDefault()" 
     >
      <slot :label="item.label"></slot>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, watch } from 'vue'
import {throttle} from '../utils/throttle'

export default defineComponent({
  props: {
    modelValue: {
      type: Array as () => any[],
      default: []
    },
    keyAttr: {
      type: String,
      default: 'id'
    }
  },
  setup(props) {
    
    const vm = getCurrentInstance()
    const list_ = ref<any[]>([])
    list_.value = props.modelValue
    
    const currentKey = ref('');
    function swapItemByKey(key: string) {
      const fromIndex = list_.value.findIndex(item => item[props.keyAttr] === currentKey.value);
      const toIndex = list_.value.findIndex(item => item[props.keyAttr] === key);
      list_.value.splice(
        toIndex, 0, ...list_.value.splice(fromIndex, 1),
      );
    }
    function handleDragstart(item: any) {
      currentKey.value = item[props.keyAttr]
    }
    function handleDragEnter(item: any) {
      swapItemByKey(item[props.keyAttr])
    }
    
    function handleDragEnd() {
      vm?.emit('update:modelValue', list_.value)

    }
    return {
      list_,
      handleDragstart,
      handleDragEnter: throttle(handleDragEnter, 100),
      handleDragEnd
    }
  },
})
</script>

<style lang="less" scoped>
.list {
  &-move {
    transition: transform 0.2s;
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.2s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
li{
  cursor: move;
  user-select: none;
}
</style>