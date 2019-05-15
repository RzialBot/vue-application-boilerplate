<template lang="pug">
    div.default-wrapper
        Nav
        div.default-content This is Default
</template>

<script>
import Nav from '@src/component/Nav.vue';

export default {
    components: {
        Nav,
    },
};
</script>

<style lang="scss">
    .default-wrapper {
        padding: 1em;

        .default-content {
            padding: 1em 0 0 0;
        }
    }
</style>
