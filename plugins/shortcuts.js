import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({ storageKey: 'color-scheme' })
const toggleDark = useToggle(isDark)

export { isDark, toggleDark }
