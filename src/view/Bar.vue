<template lang="pug">
    div.bar-wrapper
        Nav
        div.bar-content This is Bar
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
    .bar-wrapper {
        padding: 1em;

        color: #fff;
        background: url(~@res/images/pattern-2.png);

        .bar-content {
            padding: 1em 0 0 0;
        }
    }
</style>
