<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form">
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const form = ref({})
</script>
<style lang="scss"></style>
