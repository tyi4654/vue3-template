import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    /**
     * root: './',                    项目根目录（index.html 文件所在的位置）
     * base: '',                      开发或生产环境服务的公共基础路径
     * mode: 'development',           模式
     * define: '',                    定义全局常量替换方式
     * publicDir,                     作为静态资源服务的文件夹
     * cacheDir                       存储缓存文件的目录
     * resolve.alias
     *
     */

    compilerOptions: {
        // ...
        types: ['element-plus/global']
    },

    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ], // 需要用到的插件数组
    server: {
        open: true,
        port: 3000
    }
})
