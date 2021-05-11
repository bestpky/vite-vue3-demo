<template>
    <div style="margin-left: 200px">
        <div>
            <a-tooltip :visible="isEllipsis">
                <template #title> {{ inputValue }} </template>
                <span ref="wrapperRef" class="wrapper" :style="`max-width: 100px`">
                    {{ inputValue }}
                </span>
            </a-tooltip>
        </div>
        <input type="text" v-model="inputValue" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    setup() {
        const wrapperRef = ref<HTMLSpanElement | null>(null)
        const isEllipsis = ref(false)
        const inputValue = ref('')
        onMounted(() => {
            const mutation = new MutationObserver(function (mutationRecoards, observer) {
                const { clientWidth = 0, scrollWidth = 0 } = wrapperRef.value ?? {}
                isEllipsis.value = scrollWidth > clientWidth
            })
            if (wrapperRef.value) {
                // 对观察者添加需要观察的元素，并设置需要观察元素的哪些方面
                mutation.observe(wrapperRef.value, {
                    childList: true
                })
            }
        })
        return {
            inputValue,
            wrapperRef,
            isEllipsis
        }
    }
})
</script>

<style lang="less" scoped>
.wrapper {
    margin-top: 200px;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border: 1px solid #ccc;
}
</style>
