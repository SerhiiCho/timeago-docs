import defineVersionedConfig from 'vitepress-versioning-plugin'
import type { MarkdownEnv } from 'vitepress'
import MarkdownIt from 'markdown-it'

export default defineVersionedConfig(
    {
        lang: 'en-US',
        title: 'Timeago',
        head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
        description:
            'Fast and lightweight date time package that converts given date into "n time ago" format',

        versioning: {
            latestVersion: 'v3 (latest)',
        },

        lastUpdated: true,

        sitemap: {
            hostname: 'https://time-ago.github.io',
        },

        themeConfig: {
            versionSwitcher: false,
            logo: '/images/logo.png',
            footer: {
                message:
                    'Released under the <a href="https://github.com/SerhiiCho/timeago/blob/main/LICENSE.md" target="_blank">MIT License</a>',
                copyright:
                    'Copyright © 2018 - present <a href="https://serhii.io/about-me" target="_blank">Serhii Cho</a>',
            },

            search: {
                provider: 'local',
            },

            nav: [
                {
                    component: 'VersionSwitcher',
                },
                { text: 'Get Started', link: '/get-started' },
                {
                    text: 'Changelog',
                    link: 'https://github.com/SerhiiCho/timeago/blob/main/CHANGELOG.md',
                },
            ],
            sidebar: {
                '/v2/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Get Started', link: '/v2/get-started' },
                            { text: 'Configure', link: '/v2/configurations' },
                            { text: 'Options', link: '/v2/options' },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            {
                                text: 'What is Timeago?',
                                link: '/v2/what-is-timeago',
                            },
                            { text: 'Contribute', link: '/v2/contribute' },
                        ],
                    },
                ],
                '/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Get Started', link: '/get-started' },
                            { text: 'Configure', link: '/configurations' },
                            { text: 'Options', link: '/options' },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            {
                                text: 'What is Timeago?',
                                link: '/what-is-timeago',
                            },
                            { text: 'Contribute', link: '/contribute' },
                        ],
                    },
                ],
            },

            socialLinks: [
                {
                    icon: 'github',
                    link: 'https://github.com/SerhiiCho/timeago',
                },
            ],
        },
    },
    // @ts-ignore
    __dirname,
)
