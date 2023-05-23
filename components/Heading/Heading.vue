<template>
    <component
        :is="`h${level}`"
        class="block-heading"
        :class="classNames"
    >{{ text }}
    </component>
</template>

<script setup>
defineProps({
    text: String,
    level: {
        type: Number,
        default: 1
    },
    classNames: String
});
</script>

<style lang="scss">
.block-heading {
    &.heading-1 {
        font-size: 48px;
    }
    &.heading-2 {
        font-size: 36px;
    }
    &.heading-3 {
        font-size: 32px;
    }
    &.heading-4 {
        font-size: 24px;
    }
    &.heading-5 {
        font-size: 18px;
    }
}
</style>