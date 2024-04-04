<script setup>
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts.js'

const postsStore = usePostsStore()
</script>
<template>
  <div v-for="post in postsStore.sorted" :key="post.id">
    <MyWrapper>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>

<style lang="scss" scoped></style>