<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="mx-auto p-4 container">
    <p class="mb-4 text-lg font-bold">
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <HelloWorld msg="Vite+Vue" />

    <ul class="list-none space-y-2">
      <li>
        <RouterLink to="/" class="flex items-center rounded-md bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200">
          <i class="icon-color mr-2" />
          ColorTheme
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/zhihu" class="flex items-center rounded-md bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200">
          <i class="icon-zhihu mr-2" />
          ZhiHuHot
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/mock" class="flex items-center rounded-md bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200">
          <i class="icon-mock mr-2" />
          Mock
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/apifox" class="flex items-center rounded-md bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200">
          <i class="icon-apifox mr-2" />
          Apifox
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/adapt" class="flex items-center rounded-md bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200">
          <i class="icon-adapt mr-2" />
          Adapt
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/messagebox" class="flex items-center rounded-md bg-gray-100 px-4 py-2 transition duration-300 hover:bg-gray-200">
          <i class="icon-messagebox mr-2" />
          MessageBox
        </RouterLink>
      </li>
    </ul>

    <RouterView />
  </div>
</template>


<style scoped>

</style>
