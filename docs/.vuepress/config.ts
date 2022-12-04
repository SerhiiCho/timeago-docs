import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Timeago',
    description: 'Fast and lightweight date time package that converts given date into "n time ago" format',
    head: [
        // ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'GitHub',
                link: 'https://github.com/SerhiiCho/timeago',
            },
        ],
    }),
})
