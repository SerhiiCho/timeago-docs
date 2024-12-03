<script setup lang="ts">
import StarIcon from './Icons/StarIcon.vue'
import PopupBtn from './PopupBtn.vue'

const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
    <div class="popup">
        <span>Star Timeago on GitHub to keep us going</span>

        <div class="popup__buttons">
            <PopupBtn
                href="https://github.com/SerhiiCho/timeago"
                style="background-color: var(--popup-btn1)"
            >
                <StarIcon width="20" height="20" /> Okay
            </PopupBtn>

            <PopupBtn @click="emit('close')">Already did</PopupBtn>
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    bottom: 15px;
    right: 10px;
    background-color: var(--popup-bg);
    padding: 1em;
    border-radius: 0.7em;
    z-index: 100;
    color: var(--vp-custom-block-tip-text);
    transition: transform 0.4s;
}

.popup__buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}
</style>
