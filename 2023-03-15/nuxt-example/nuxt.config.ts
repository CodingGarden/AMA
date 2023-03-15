// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://unpkg.com/@picocss/pico@1.*/css/pico.min.css'
      }]
    }
  }
})
