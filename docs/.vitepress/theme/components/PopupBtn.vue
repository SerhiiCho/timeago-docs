<script setup lang="ts">
type Props = {
    href?: string
}

defineProps<Props>()
</script>

<template>
    <a v-if="href" :href type="button" target="_blank">
        <slot />
    </a>

    <button v-else type="button">
        <slot />
    </button>
</template>

<style scoped>
button,
a {
    width: 100%;
    background-color: var(--popup-btn2);
    color: var(--vp-custom-block-text);
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: center;
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: opacity 0.2s;
    text-align: center;
}

button:hover,
a:hover {
    opacity: 0.8;
}
</style>
