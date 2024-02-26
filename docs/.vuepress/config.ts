import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    base: '/timeago-docs/',
    lang: 'en-US',
    title: 'Timeago',
    description: 'Fast and lightweight date time package that converts given date into "n time ago" format.',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ],
    bundler: viteBundler(),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        })
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        navbar: [
            {
                text: 'Documentation',
                link: '/documentation',
            },
            {
                text: 'Usage example',
                link: 'https://replit.com/@SerhiiCho/Usage-of-timeago-package',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/SerhiiCho/timeago',
            },
            {
                text: '📃 Changelog',
                link: 'https://github.com/SerhiiCho/timeago/blob/master/docs/CHANGELOG.md',
            },
        ],
    }),
})
