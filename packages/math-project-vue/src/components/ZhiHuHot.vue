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
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hot {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #d1e9ff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.hot:hover {
  background-color: #e3f2fd;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #1a73e8;
  margin: 0;
}

.excerpt {
  font-size: 1rem;
  color: #5f6368;
  margin: 0.5rem 0;
}

.detail-text {
  font-size: 0.9rem;
  color: #9aa0a6;
  text-align: start;
}

.thumbnail {
  max-width: 100px;
  height: auto;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #1a73e8;
}

.thumbnail:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  border-color: #0d47a1;
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

@media (max-width: 768px) {
  .list {
    padding: 1rem;
  }

  .hot {
    flex-direction: column;
    align-items: flex-start;
  }

  .thumbnail {
    max-width: 100%;
  }
}

/* 按钮样式 */
button {
  padding: 0.5rem 1rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0d47a1;
}

/* 小标号颜色 */
span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff5252;
}
</style>
