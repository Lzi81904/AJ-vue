<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const squareUrl = ref(
  'https://ts1.cn.mm.bing.net/th?id=OIP-C.x09r5tGxTyGiAchyk-KCjQAAAA&w=204&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
)
const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss">
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
