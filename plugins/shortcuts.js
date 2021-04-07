import { useMagicKeys, usePreferredDark } from '@vueuse/core'
import { watch } from '@vue/composition-api'

const { d } = useMagicKeys()
const isDark = usePreferredDark()

export default function ({ $colorMode }) {
  watch(d, v => {
    if (v) {
      if ($colorMode.value === 'light') {
        $colorMode.preference = 'dark'
        if (isDark.value) $colorMode.preference = 'system'
      } else {
        $colorMode.preference = 'light'
        if (!isDark.value) $colorMode.preference = 'system'
      }
    }
  })
}
