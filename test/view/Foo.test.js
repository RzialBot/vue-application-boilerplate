import {shallowMount} from '@vue/test-utils';

import Foo from '@src/view/Foo.vue';

describe('<Foo>', () => {
    it('Get <Foo>', function() {
        const wrapper = shallowMount(Foo);

        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.findAll('div')).toHaveLength(2);
    });

    it('Call <Foo>.test()', function() {
        const wrapper = shallowMount(Foo);

        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.test()).toBeTruthy();
    });
});
