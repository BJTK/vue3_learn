import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports:['vue','vue-router']//自动导入vue相关插件
    })
  ],
  server:{
    proxy:{
      'api/':'http://testapi.xuexiluxian.cn'
    }
  }
})
