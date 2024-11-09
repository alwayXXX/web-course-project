import { createApp } from 'vue'
import MessageBox from './MessageBox.vue'

export interface MessageBoxProps {
  title?: string
  content?: string
  closeable?: boolean
  showCancle?: boolean
  showConfirm?: boolean
  showIcon?: boolean
}

interface MessageBoxOptions extends MessageBoxProps {

  onCancel?: () => void

  onConfirm?: () => void
}

export function showMsg(options: MessageBoxOptions) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp(MessageBox, {
    ...options,
    onCancel: () => {
      // eslint-disable-next-line ts/no-unused-expressions
      options.onCancel ? options.onCancel() : null
      app.unmount()
      div.remove()
    },
    onConfirm: () => {
      // eslint-disable-next-line ts/no-unused-expressions
      options.onConfirm ? options.onConfirm() : null
      app.unmount()
      div.remove()
    },
  })
  app.mount(div)
}
