import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

/**
 * 解析路径
 * @param relativePath 相对路径
 * @returns 绝对路径
 */
export const resolvePath = (relativePath: string) => {
    return path.resolve(__dirname, relativePath)
}

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            '@': resolvePath('./src')
        }
    }
})
