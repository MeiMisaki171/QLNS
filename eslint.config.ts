import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser
    },
    env: {
      browser: true, // Thêm dòng này để báo cho ESLint rằng đang chạy trong môi trường trình duyệt
      es2021: true
    },
    plugins: {
      '@typescript-eslint': ts,
      react: react,
      'react-hooks': hooks,
      'react-refresh': refresh
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
]
