import { shallowMount } from '@vue/test-utils'
import Heading2 from '@/components/Utils/Heading2.vue'

describe('Heading2.vue', () => {
    it('renders props.text when passed', () => {
        const title = 'This is a title'
        const wrapper = shallowMount(Heading2, {
            propsData: { title }
        })
        expect(wrapper.text()).toMatch(title)
    })
    it('heading centered when center ist passed', () => {
        const center = true
        const wrapper = shallowMount(Heading2, {
            propsData: { center }
        })
        expect(wrapper.classes()).toContain('title--center')
    })
})