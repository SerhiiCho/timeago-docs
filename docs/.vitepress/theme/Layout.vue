<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import StarPopup from './components/StarPopup.vue'
import PopupSlideTransition from './components/Transitions/PopupSlideTransition.vue'

const isVisible = ref<boolean>(false)
const { Layout } = DefaultTheme

onMounted(() => {
    checkPopup()
})

const checkPopup = (): void => {
    if (localStorage.getItem('starPopup') === null) {
        isVisible.value = true
    }
}

const closePopup = (): void => {
    isVisible.value = false
    localStorage.setItem('starPopup', '1')
}
</script>

<template>
    <Layout>
        <template #doc-top>
            <PopupSlideTransition>
                <StarPopup v-if="isVisible" @close="closePopup" />
            </PopupSlideTransition>
        </template>
    </Layout>
</template>
