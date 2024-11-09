<script lang="ts" setup>
import type { MessageBoxProps } from './index.ts'

const {
  closeable = true,
  showCancle = true,
  showConfirm = true,
  showIcon = true,
} = defineProps<MessageBoxProps>()

const emit = defineEmits(['cancel', 'confirm'])

function handleCancle() {
  emit('cancel')
}

function handleConfirm() {
  emit('confirm')
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-[#3e36487a]"
  >
    <div class="relative mx-4 max-w-md w-full rounded-xl bg-white p-6 shadow-lg">
      <!-- 关闭按钮 -->
      <div v-if="closeable" class="absolute right-4 top-4 cursor-pointer text-2xl" @click="handleCancle">
        ×
      </div>

      <!-- 弹窗内容 -->
      <div class="flex items-start gap-3 text-lg">
        <!-- 图标 -->
        <div v-if="showIcon" class="mb-3 flex-shrink-0 text-2xl text-primary">
          <!-- 这里可以替换为一个图标组件 -->
          <i class="fas fa-info-circle" />
        </div>

        <div class="flex-1">
          <p v-if="title" class="text-xl text-gray-800 font-semibold">
            {{ title }}
          </p>
          <div class="mt-2 break-words text-gray-600">
            {{ content }}
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="mt-6 flex justify-center gap-8">
        <button
          v-if="showCancle"
          class="rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          @click="handleCancle"
        >
          取消
        </button>
        <button
          v-if="showConfirm"
          class="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
          @click="handleConfirm"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #3498db; /* 主要颜色 */
}

.bg-primary-dark {
  background-color: #2980b9; /* 按钮悬停时的深色 */
}

.text-primary {
  color: #3498db; /* 主要颜色的文字 */
}
</style>
