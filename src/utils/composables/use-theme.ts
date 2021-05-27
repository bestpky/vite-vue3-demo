import { customRef, computed, watch } from 'vue'

export function useTheme() {
    // 使用customRef是为了劫持Ref<theme>，设置时同时设置localStorage，从localStorage取默认值
    const theme = customRef<string>((track, trigger) => {
        return {
            get() {
                track()
                return localStorage.getItem('theme') ?? 'light'
            },
            set(newValue: string | null) {
                if (!newValue) {
                    localStorage.removeItem('theme')
                } else {
                    localStorage.setItem('theme', newValue)
                }
                trigger()
            }
        }
    })
    const switchTheme = (isDark: boolean) => {
        theme.value = isDark ? 'dark' : 'light'
    }
    const isDark = computed(() => theme.value === 'dark')
    watch(
        theme,
        newValue => {
            document.documentElement.setAttribute('data-theme', newValue)
        },
        {
            immediate: true
        }
    )
    return {
        theme,
        switchTheme,
        isDark
    }
}
