import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {sync} from 'vuex-router-sync';

import StoreConfig from './core/store';
import RouterConfig from './core/router';

import App from './core/App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreConfig);
const router = new VueRouter(RouterConfig);

sync(store, router);

export default new Vue({
    store,
    router,

    el: '#app',
    render: h => h(App),
});
