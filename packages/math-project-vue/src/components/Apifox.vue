<script lang="ts" setup>
import type { Pet, Response } from '../types/type.ts'
import { ref } from 'vue'

const baseUrl = 'https://apifoxmock.com/m1/5224762-4891545-default'

const pet = ref<Pet>()

async function getData() {
  const res = await fetch(`${baseUrl}/pet/1`)
  const json: Response<Pet> = await res.json()
  pet.value = json.data
}
</script>

<template>
  <div>
    <button @click="getData">
      获取宠物数据
    </button>
    <div>
      <div>{{ pet?.name }}</div>
      <div>{{ pet?.category.name }}</div>
      <img v-for="(url, index) in pet?.photoUrls" :key="index" :src="url" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
