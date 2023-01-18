import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: '1qw',
      name:'zhangsan',
      age:18
    }
  },
  getters:{},
  actions:{}
})