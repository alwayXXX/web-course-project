<script setup lang="ts">
import { onMounted,ref } from 'vue';
import {ZhiHuHot,ZhiHuHotList} from "../types/zhihu";

const list = ref<ZhiHuHot[]>([]);

const getData = async () => {
  const url = "/api/v3/feed/topstory/hot-lists/total";
  let response = await fetch(url, { mode: "no-cors" });
  const res: ZhiHuHotList = await response.json();
  list.value = res.data;
};

onMounted(() => {
  getData();
});

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`);
};
</script>

<template>
  <div class="list">
    <section v-for="(item, index) in list" :key="item.id" class="hot"
             @click="toggleHot(item.target.id)">
      <span>{{ index+1 }}</span>
      <div>
        <h3 class='ellipsis 2'>
          {{ item.target.title }}
        </h3>
        <p class='ellipsis 1'>
          {{ item.target.excerpt }}
        </p>
        <div style="text-align: start;">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt=""></section>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.hot {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hot:hover {
  background-color: #f5f5f5;
}

.content {
  flex: 1;
}

.title {
  font-size: 1.2rem;
  margin: 0;
}

.excerpt {
  font-size: 0.9rem;
  color: #777;
  margin: 0.5rem 0;
}

.detail-text {
  font-size: 0.9rem;
  color: #777;
  text-align: start;
}

.thumbnail {
  max-width: 100px;
  height: auto;
  border-radius: 4px;
}

.ellipsis-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>