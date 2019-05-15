<template lang="pug">
    div.foo-wrapper
        Nav
        div.foo-content This is Foo
</template>

<script>
import Nav from '@src/component/Nav.vue';

export default {
    components: {
        Nav,
    },
    methods: {
        test() {
            return true;
        },
    },
};
</script>

<style lang="scss">
.foo-wrapper {
    padding: 1em;

    color: #fff;
    background: url("~@res/images/pattern-1.png");

    .foo-content {
        padding: 1em 0 0 0;
    }
}
</style>
