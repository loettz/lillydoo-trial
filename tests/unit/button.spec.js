import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Utils/Button.vue'

describe('Button.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'Click here'
        const wrapper = shallowMount(Button, {
            propsData: { text }
        })
        expect(wrapper.text()).toMatch(text)
    })
    it('button has fullwidth when fullwidth ist passed', () => {
        const fullwidth = true
        const wrapper = shallowMount(Button, {
            propsData: { fullwidth }
        })
        expect(wrapper.classes()).toContain('button-primary--fullwidth')
    })
})