import { defineStore } from 'pinia'
const API = 'http://localhost:3000/posts'
const options = { year: 'numeric', month: '2-digit', day: '2-digit' }

export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [],
      loading: true,
      errMsg: '',
      count: 0
    }
  },
  // computed
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    saved: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },
  // methods
  actions: {
    getPosts() {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.count = data.length
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          this.errMsg = 'Error'
          console.log(err)
        })
    },
    addPost(post) {
      const newPost = {
        id: (Math.max(...this.posts.map((obj) => obj.id)) + 1).toString(),
        title: post.title,
        body: post.body,
        author: 'Someone from sometime',
        created_at: new Date().toLocaleDateString('en-US', options),
        is_saved: false
      }
      this.posts.push(newPost)
      this.count++

      fetch(API, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost)
      }).catch((err) => console.log(err))
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
      this.count--
      fetch(API + `/${id}`, {
        method: 'DELETE'
      }).catch((err) => console.log(err))
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved

      fetch(API + `/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ is_saved: post.is_saved })
      }).catch((err) => console.log(err))
    }
  }
})
