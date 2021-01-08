import { shallowMount } from '@vue/test-utils'
import Service from '@/components/Utils/Service.vue'

describe('Service.vue', () => {
    it('contains correct icon and text', () => {
        const icon = 'phone'
        const text = '1234567'
        const wrapper = shallowMount(Service, {
            propsData: { icon, text }
        })
        expect(wrapper.find('.material-icons').text()).toMatch(icon)
        expect(wrapper.find('.service').text()).toMatch(text)
    })
})