<template lang="pug">
    nav.app-nav
        span.app-nav-item
            router-link(to="/foo") Foo
        span.app-nav-item
            router-link(to="/bar") Bar
</template>

<style lang="scss">
.app-nav {
    text-align: center;
    padding: 0 0 0.5em 0;

    border-bottom: 1px solid grey;

    .app-nav-item {
        margin: 0 2em;

        .router-link-active {
            font-weight: bold;
        }

        a {
            color: inherit;
            text-decoration: none;
        }
    }
}
</style>
