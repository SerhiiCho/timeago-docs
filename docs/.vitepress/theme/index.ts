import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import VersionSwitcher from './components/VersionSwitcher.vue'
import './main.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('VersionSwitcher', VersionSwitcher)
    },
} satisfies Theme
