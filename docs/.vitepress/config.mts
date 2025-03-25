import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-us',
  title: 'Artery Docs',
  description: 'the docs of the mod Artery for the mod loader Fabric for the hit game Minecraft',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/icon.png'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: 'https://modrinth.com/mod/artery' }
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Player Guides',
          link: '/guides/',
          items: [
            { text: 'Sanguinity', link: '/guides/sanguinity' },
            {
              text: 'Organ Block',
              link: '/guides/organ-block/',
              collapsed: true,
              items: [
                { text: 'Atrium', link: '/guides/organ-block/atrium' },
                { text: 'Ventricle', link: '/guides/organ-block/ventricle' },
                { text: 'Fibroblaster', link: '/guides/organ-block/fibroblaster' },
                { text: 'Pressor', link: '/guides/organ-block/pressor' },
              ]
            },
            {
              text: 'Ores',
              link: '/guides/ores/',
              collapsed: true,
              items: [
                {text: 'Erythrite', link: '/guides/ores/erythrite'},
                {text: 'Leukium', link: '/guides/ores/leukium'},
                {text: 'Thrombium', link: '/guides/ores/thrombium'},
              ]
            },
            { text: "Miscellaneous Items", link: '/guides/misc-items/'}
          ]
        }
      ],

      '/devs/': [
        {
          text: 'Developer Guides',
          items: [
            { text: 'Extending Artery', link: '/devs/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/c-ppvr/artery' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    }
  },
  markdown: {
    math: true
  }
})
