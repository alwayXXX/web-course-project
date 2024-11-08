import { computed, inject, ref } from 'vue'
import { $i18n } from '../plugin/i18n'

type Local = 'zh' | 'en'
const local = ref<Local>('zh') // 在外面定义可以保持状态

export function useI18n() {
  const i18n = inject($i18n)!
  const $t = computed(() => i18n[local.value])
  const setLocal = (type: Local) => {
    local.value = type
  }

  return { local, setLocal, $t }
}