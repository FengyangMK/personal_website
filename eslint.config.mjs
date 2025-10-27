import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import importSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEslintParser from 'vue-eslint-parser'

export default defineConfig([
    {
        files: ['**/*.{js,ts,tsx,vue}'],
        rules: {
            ...js.configs.recommended.rules,
            ...pluginVue.configs['flat/recommended'].rules,
            'no-console': 'error',
            'simple-import-sort/imports': 'error',
            'prettier/prettier': 'error'
        },
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: tsParser
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            vue: pluginVue,
            prettier: prettier,
            'simple-import-sort': importSort
        }
    },
    globalIgnores(['node_modules', 'dist', 'public'])
])
