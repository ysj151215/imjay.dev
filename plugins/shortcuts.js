import { useMagicKeys, useDark, useToggle } from '@vueuse/core'
import { watch } from '@vue/composition-api'

const isDark = useDark({ storageKey: 'color-scheme' })
const toggleDark = useToggle(isDark)

export { isDark, toggleDark }

export default function () {
  const { d } = useMagicKeys()
  watch(d, v => {
    if (v) {
      toggleDark()
    }
  })
}
