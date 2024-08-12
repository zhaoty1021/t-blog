import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    userInfo: {
      name: '用户名',
      bio: '个性签名',
      avatar: '/src/assets/logo.svg'
    },
    blogPosts: [
      { title: '博客文章1', summary: '这是第一篇博客文章的摘要' },
      { title: '博客文章2', summary: '这是第二篇博客文章的摘要' }
    ]
  }),
  actions: {
    addPost(post) {
      this.blogPosts.push(post);
    }
  }
});