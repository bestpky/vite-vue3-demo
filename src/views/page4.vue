<template>
  <DragSort v-model="list">
    <template #default="{ item }">
      <span>{{ item.label }}</span>
    </template>
  </DragSort>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import DragSort from '../components/DragSort.vue'


const wrapper = (function* idGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}());

export const getNextId = () => wrapper.next().value;

class MockItem {
  id = getNextId();
  label = Math.random().toString(36).slice(-8);
}

type Item = InstanceType<typeof MockItem>

type List = Item[]

export default defineComponent({
  components: {
    DragSort
  },
  setup() {
    const list = ref<List>([])
    list.value = Array(20).fill(null).map(() => new MockItem());
    watch(list, v => console.log(v))
    return {
      list,
    }
  },
})
</script>
