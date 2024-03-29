<script setup>
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'

const posts = [
  {
    id: 1,
    title: 'A great book!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
    author: 'Joe Mama',
    created_at: '11/06/2023',
    is_saved: false
  },
  {
    id: 2,
    title: 'Cool book!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
    author: 'Joe Mama',
    created_at: '23/06/2023',
    is_saved: false
  },
  {
    id: 3,
    title: 'Im bored!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
    author: 'Joe Mama',
    created_at: '30/06/2023',
    is_saved: false
  },
  {
    id: 4,
    title: 'Coding FF',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
    author: 'Joe Mama',
    created_at: '05/07/2023',
    is_saved: false
  }
]
</script>
<template>
  <div v-for="(post) in posts" :key="post.id">
    <MyWrapper>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>

<style lang="scss" scoped>

</style>