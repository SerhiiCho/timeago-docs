<template>
    <transition name="popup-slide">
        <slot />
    </transition>
</template>

<style scoped>
.popup-slide-enter-active,
.popup-slide-leave-active {
    transition: transform 0.4s;
}

.popup-slide-enter-from,
.popup-slide-leave-to {
    transform: translateX(100%);
}

.popup-slide-enter-to,
.popup-slide-leave-from {
    transform: translateX(0);
}
</style>
