<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { usePostsStore } from '@/stores/posts.js'
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'


const postsStore = usePostsStore()
const postFilter = ref('all')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}

const displayText = computed(() => {
  return postFilter.value === 'all' ? 'All posts' : 'Saved posts';
})

const buttonText = computed(() => {
  return postFilter.value === 'all' ? 'Show saved posts' : 'Show all posts';
})
</script>
<template>
  <!-- Header -->
  <div class="header">
    <div>
      <h3>{{ displayText }}</h3>
    </div>
    <button @click="setPostFilter">{{ buttonText }}</button>
  </div>

  <div v-if="postFilter === 'all'">
    <div v-for="post in postsStore.sorted" :key="post.id">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>

  <div v-if="postFilter === 'saved'">
    <div v-for="post in postsStore.saved" :key="post.id">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;

    &:hover {
      background: #0ea5e9;
    }

    &:active {
      background: #006695;
    }
  }
}
</style>