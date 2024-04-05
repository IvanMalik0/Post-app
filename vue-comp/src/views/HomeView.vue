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
      <span v-show="postsStore.loading" class="material-icons">cached</span>
    </div>
    <button @click="setPostFilter">{{ buttonText }}</button>
  </div>

  <!-- Error -->
  <div v-if="postsStore.errMsg" class="error">{{ postsStore.errMsg }}</div>

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

    span {
      animation: spin 1s linear infinite;
    }
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

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  }
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}
</style>