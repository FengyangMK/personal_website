import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
/**
 * 解析路径
 * @param relativePath 相对路径
 * @returns 绝对路径
 */
export const resolvePath = (relativePath: string) => {
    return path.resolve(__dirname, relativePath)
}

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: resolvePath('./src/auto-imports.d.ts'),
            eslintrc: {
                enabled: true
            }
        }),
        Components({
            dts: resolvePath('./src/components.d.ts')
        })
    ],
    resolve: {
        alias: {
            '@': resolvePath('./src')
        }
    }
})
