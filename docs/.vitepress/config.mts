import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-us",
  title: "Artery Docs",
  description: "the docs of the mod Artery for the mod loader Fabric for the hit game Minecraft",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/c-ppvr/artery' }
    ]
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/"
    }
  },
})
