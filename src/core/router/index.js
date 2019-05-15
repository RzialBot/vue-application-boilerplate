import Default from '@src/view/Default.vue';
import Foo from '@src/view/Foo.vue';
import Bar from '@src/view/Bar.vue';

export default {
    mode: 'history',
    routes: [
        {path: '/', component: Default},
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},
    ],
};
