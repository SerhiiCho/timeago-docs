import defineVersionedConfig from 'vitepress-versioning-plugin'

export default defineVersionedConfig(
    {
        lang: 'en-US',
        title: 'Timeago',
        head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
        description:
            'Fast and lightweight date time library that converts given date into "n time ago" format',

        versioning: {
            latestVersion: 'v3',
        },

        lastUpdated: true,

        sitemap: {
            hostname: 'https://time-ago.github.io',

            // exclude old version pages from sitemap
            transformItems: items => {
                return items.filter(
                    item =>
                        !item.url.startsWith('v2/') && !item.url.startsWith('v1/'),
                )
            },
        },

        themeConfig: {
            versionSwitcher: false,
            logo: '/images/logo.png',
            footer: {
                message:
                    'Released under the <a href="https://github.com/SerhiiCho/timeago/blob/main/LICENSE.md" target="_blank">MIT License</a>',
                copyright:
                    'Copyright © 2019 - present <a href="https://serhii.io/about-me" target="_blank">Serhii Chornenkyi (Serhii Cho)</a>',
            },

            search: {
                provider: 'local',
            },

            nav: [
                {
                    component: 'VersionSwitcher',
                    props: {
                        versions: ['v3', 'v2', 'v1'],
                        latestVersion: 'v3',
                    },
                },
                { text: 'Guide', link: '/v3/' },
                { text: 'Community', link: '/v3/community' },
                {
                    text: 'Changelog',
                    link: 'https://github.com/SerhiiCho/timeago/blob/main/CHANGELOG.md',
                },
            ],
            sidebar: {
                '/v1/': [
                    { text: 'Get Started', link: '/v1/' },
                    { text: 'Contribute', link: '/v1/contribute' },
                    { text: 'Configurations', link: '/v1/configurations' },
                ],
                '/v2/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Get Started', link: '/v2/' },
                            { text: 'Configurations', link: '/v2/configurations' },
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
                '/v3/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Installation', link: '/v3/' },
                            { text: 'Usage Guide', link: '/v3/usage' },
                            { text: 'Configurations', link: '/v3/configurations' },
                            { text: 'Options', link: '/v3/options' },
                            { text: 'Upgrade Guide', link: '/v3/upgrade' },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            {
                                text: 'What is Timeago?',
                                link: '/v3/what-is-timeago',
                            },
                            { text: 'Contribute', link: '/v3/contribute' },
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
