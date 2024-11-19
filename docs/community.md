---
sidebar: false
description: Timeago community members who have helped shape Timeago by providing feedback, ideas, and GitHub stars
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://www.github.com/SerhiiCho.png',
        name: 'Serhii Cho',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/SerhiiCho' },
            { icon: 'x', link: 'https://x.com/SerhiiCho' }
        ]
    },
    {
        avatar: 'https://www.github.com/cyclimse.png',
        name: 'Andy Méry',
        title: 'Contributor',
        links: [{ icon: 'github', link: 'https://github.com/cyclimse' }],
    },
    {
        avatar: 'https://www.github.com/demget.png',
        name: 'demget',
        title: 'Contributor',
        links: [{ icon: 'github', link: 'https://github.com/demget' }],
    },
    {
        avatar: 'https://www.github.com/sheldonhull.png',
        name: 'sheldonhull',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/sheldonhull' }],
    },
    {
        avatar: 'https://www.github.com/dragstor.png',
        name: 'Nikola',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/dragstor' }],
    },
    {
        avatar: 'https://www.github.com/hugmouse.png',
        name: 'Mysh!',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/hugmouse' }],
    },
    {
        avatar: 'https://www.github.com/MFrank2016.png',
        name: 'Frank',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/MFrank2016' }],
    },
    {
        avatar: 'https://www.github.com/myron-meng.png',
        name: 'Myron Meng',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/myron-meng' }],
    },
    {
        avatar: 'https://www.github.com/lesichkovm.png',
        name: 'Milan Lesichkov',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/lesichkovm' }],
    },
    {
        avatar: 'https://www.github.com/matthewmueller.png',
        name: 'Matt Mueller',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/matthewmueller' }],
    },
    {
        avatar: 'https://www.github.com/Tim3Triver.png',
        name: '赵晓鹏',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/Tim3Triver' }],
    },
    {
        avatar: 'https://www.github.com/LixvYang.png',
        name: 'LixvYang',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/LixvYang' }],
    },
    {
        avatar: 'https://www.github.com/zhanglei.png',
        name: 'zhanglei',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/zhanglei' }],
    },
    {
        avatar: 'https://www.github.com/admpub.png',
        name: 'Hank Shen',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/admpub' }],
    },
    {
        avatar: 'https://www.github.com/J-iSkeLo.png',
        name: 'L. Chernenikiy',
        title: 'Early Stargazer',
        links: [{ icon: 'github', link: 'https://github.com/J-iSkeLo' }],
    },
]
</script>

# Our Community

We owe a huge thanks to the incredible members of our community who have helped shape Timeago. Your feedback, ideas, and support have been invaluable. Thank you for being a part of our journey!

:::tip ⭐️ Star us on GitHub
If you want to support Timeago, please [star us on GitHub](https://github.com/SerhiiCho/timeago) to motivate us to keep going.
:::

<VPTeamMembers size="small" :members="members" />