import {shallowMount} from '@vue/test-utils';

import Bar from '@src/view/Bar.vue';

describe('<Bar>', () => {
    it('Get <Bar>', function() {
        const wrapper = shallowMount(Bar);

        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.findAll('div')).toHaveLength(2);
    });
});
