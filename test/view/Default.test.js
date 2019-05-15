import {shallowMount} from '@vue/test-utils';

import Default from '@src/view/Default.vue';

describe('<Default>', () => {
    it('Get <Default>', function() {
        const wrapper = shallowMount(Default);

        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.findAll('div')).toHaveLength(2);
    });
});
