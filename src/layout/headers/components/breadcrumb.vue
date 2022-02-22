<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
      <span v-if="index === breadcrumb.length - 1" class="no-redirect">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span v-else class="redirect">{{ $t(`menus.${item.name}`) }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const breadcrumb = ref([])
const initBreadcrumb = () => {
  breadcrumb.value = route.matched
  console.log(route.matched)
}
watch(
  route,
  () => {
    initBreadcrumb()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
