import { shallowMount } from '@vue/test-utils'
import Link from '@/components/Utils/Link.vue'

describe('Link.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'Click here'
        const wrapper = shallowMount(Link, {
            propsData: { text }
        })
        expect(wrapper.text()).toMatch(text)
    })
    it('button has fullwidth when fullwidth ist passed', () => {
        const href = "www.test.de"
        const wrapper = shallowMount(Link, {
            propsData: { href }
        })
        expect(wrapper.attributes().href).toEqual(href);
    })
})