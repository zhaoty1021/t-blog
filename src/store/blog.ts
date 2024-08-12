// src/store/blog.ts
import { defineStore } from 'pinia';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blogs: [] as Array<{ id: number; title: string; content: string }>,
  }),
  actions: {
    addBlog(blog: { id: number; title: string; content: string }) {
      this.blogs.push(blog);
    },
    getBlog(id: number) {
      return this.blogs.find(blog => blog.id === id);
    }
  }
});