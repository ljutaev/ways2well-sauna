import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    base: '/ways2well-sauna/', // назва вашого репозиторію
    css: {
        modules: {
            localsConvention: 'camelCase'
        }
    }
})