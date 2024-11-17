import defineVersionedConfig from 'vitepress-versioning-plugin'

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

        themeConfig: {
            versionSwitcher: false,
            logo: '/images/logo.png',

            nav: [
                {
                    component: 'VersionSwitcher',
                },
                { text: 'Get Started', link: '/get-started' },
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
