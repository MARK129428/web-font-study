<script lang="ts" setup>
import { ref, } from "vue";

const num = ref<number>(0)
const handleClick = () => {
  num.value++
}
</script>

<template>
  <div>
    <h2>{{num}}</h2>
    <el-button @click="handleClick">+1</el-button>
  </div>
</template>

<style lang="less" scoped>
h2 {
  color: red;
}
</style>