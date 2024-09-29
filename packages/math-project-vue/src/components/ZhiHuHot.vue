<script setup lang="ts">
import type { ZhiHuHot, ZhiHuHotList } from '../types/zhihu'
import { onMounted, ref } from 'vue'

const list = ref<ZhiHuHot[]>([])

async function getData() {
  const url = '/api/v3/feed/topstory/hot-lists/total'
  const response = await fetch(url, { mode: 'no-cors' })
  const res: ZhiHuHotList = await response.json()
  list.value = res.data
}

onMounted(() => {
  getData()
})

function toggleHot(id: number) {
  window.open(`https://www.zhihu.com/question/${id}`)
}
</script>

<template>
  <div class="flex flex-col gap-6 rounded-lg from-#f0f4f8 to-#d9e2ec bg-gradient-to-br p-8 shadow-lg">
    <section
      v-for="(item, index) in list"
      :key="item.id"
      class="flex cursor-pointer items-center gap-6 border border-#d1e9ff rounded-lg bg-white p-6 shadow-sm transition-all hover:bg-#e3f2fd hover:shadow-lg hover:-translate-y-2"
      @click="toggleHot(item.target.id)"
    >
      <span class="text-xl text-#ff5252 font-bold">{{ index + 1 }}</span>
      <div>
        <h3 class="line-clamp-2 overflow-hidden text-ellipsis text-left text-lg text-indigo font-bold">
          {{ item.target.title }}
        </h3>
        <p class="line-clamp-1 overflow-hidden text-ellipsis text-left text-sm text-gray-600">
          {{ item.target.excerpt }}
        </p>
        <div class="text-start text-xs text-blue">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt="" class="max-w-24 border-2 border-#1a73e8 rounded-lg shadow-md transition-all hover:scale-110 hover:border-#0d47a1 hover:shadow-lg">
    </section>
  </div>
</template>


