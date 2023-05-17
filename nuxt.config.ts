// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        histoire: {
            // your Histoire configuration
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/global.scss" as *;',
                },
            },
        },
    },
})
