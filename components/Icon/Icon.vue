<template>
    <span class="icon">
        <nuxt-icon :name=name />
    </span>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: "error"
    },
});
</script>

<style lang="scss">
.icon {

}
</style>