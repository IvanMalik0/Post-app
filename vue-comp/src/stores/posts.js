import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'A great book!',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
          author: 'Joe Mama',
          created_at: '06/25/2023',
          is_saved: false
        },
        {
          id: 2,
          title: 'Cool book!',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
          author: 'Joe Mama',
          created_at: '06/12/2023',
          is_saved: false
        },
        {
          id: 3,
          title: 'Im fine, actually!)',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
          author: 'Joe Mama',
          created_at: '06/01/2023',
          is_saved: false
        },
        {
          id: 4,
          title: 'Coding FF',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi praesentium, assumenda molestias est deleniti.',
          author: 'Joe Mama',
          created_at: '06/05/2023',
          is_saved: false
        }
      ]
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
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Someone from sometime',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
    }
  }
})
