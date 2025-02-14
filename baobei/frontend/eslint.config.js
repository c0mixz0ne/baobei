import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginImportX from 'eslint-plugin-import-x'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import pluginTs from 'typescript-eslint'
import fs from 'node:fs'
import { URL, fileURLToPath } from 'node:url'

const autoImportPath = fileURLToPath(new URL('./.eslintrc-auto-import.json', import.meta.url))
const eslintrcAutoImport = JSON.parse(fs.readFileSync(autoImportPath, 'utf8'))
const tsEslint = pluginTs.config(...pluginTs.configs.recommended).map((config) => ({
    ...config,
    languageOptions: {
        ...config.languageOptions,
        parserOptions: {
            parser: '@typescript-eslint/parser'
        }
    }
}))
const vueEslint = pluginVue.configs['flat/recommended']

export default [
    {
        plugins: {
            'import-x': pluginImportX
        }
    },
    ...tsEslint,
    ...vueEslint,
    pluginJs.configs.recommended,
    {
        ...eslintPluginPrettierRecommended,
        rules: {
            ...eslintPluginPrettierRecommended.rules,
            ...eslintConfigPrettier.rules
        }
    },
    {
        files: ['src/**/*.{js,ts,jsx,tsx,vue}'],
        rules: {
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multi-word-component-names': [
                'error',
                {
                    ignores: ['index']
                }
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            'prettier/prettier': ['error', { endOfLine: 'auto' }],

            'array-callback-return': 'error',
            'sort-imports': 'off',

            'import-x/order': [
                'error',
                {
                    groups: [
                        'external',
                        'builtin',
                        'internal',
                        'type',
                        'parent',
                        'object',
                        'sibling',
                        'index'
                    ]
                }
            ],
            'import-x/no-cycle': 'error', 
            'import-x/no-self-import': 'error',
            'no-async-promise-executor': 'off'
        },
        languageOptions: {
            ...eslintrcAutoImport
        }
    },
    {
        ignores: ['node_modules/', 'dist/', 'public/', 'src/assets/', 'tests/']
    }
]
