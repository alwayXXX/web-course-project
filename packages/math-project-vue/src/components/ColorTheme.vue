<script setup lang="ts">
import { Person } from '@alwaysxxx/tools'
import dayjs from 'dayjs'
import { useDark } from '../composables/useDark.ts'

const { enableDarkMode, disableDarkMode } = useDark()
const p = new Person('alwaysxxx', 'plan')
</script>

<template>
  <div>{{ dayjs().format("YYYY-MM-DD HH:mm:ss") }}</div>
  <div>{{ p.name }}</div>

  <div class="dark:bg-yellow">
    <div class="flex justify-center gap-5">
      <button @click="enableDarkMode">
        Dark
      </button>
      <button @click="disableDarkMode">
        Light
      </button>
    </div>
  </div>

  <p class="m-auto size-100 hover:(bg-cyan text-4xl)" content-center transition-1000>
    <button btn>
      Onclick
    </button>
  </p>

  <div class="i-carbon-logo-github" />

  <section
    class="grid grid-cols-3 w-800px items-center gap-2 rounded-md bg-yellow"
  >
    <div class="h-10 place-content-center bg-pink">
      1
    </div>
    <div bg-sky>
      2
    </div>
    <div>3</div>
    <div>4</div>
  </section>
</template>

<style scoped>

</style>
