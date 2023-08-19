<script lang="ts" setup>
import { ref } from 'vue'

const num = ref<number>(0)

const handleClick = () => {
  num.value++
}
</script>

<template>
  <div>
    <h2>这是Vue</h2>
    <h1>{{ num }}</h1>
    <button @click="handleClick">点击</button>
  </div>
</template>

<style lang="less" scoped>
h2 {
  color: orangered;
}
</style>
