import { shallowMount } from '@vue/test-utils'
import Step from '@/components/Utils/Step.vue'

describe('Step.vue', () => {
    const icon = 'list';
    const title = 'This is title'
    const text = 'Lorem Ipsum Dolor.....'
    it('contains title, text and NO link', () => {
        const wrapper = shallowMount(Step, {
            propsData: { icon, title, text }
        })
        expect(wrapper.find('.step__title').text()).toMatch(title)
        expect(wrapper.find('.step__text').text()).toMatch(text)
        expect(wrapper.find('.step__link').exists()).toBe(false)
    })

    it('contains link', () => {
        const link = "www.google.de"
        const wrapper = shallowMount(Step, {
            propsData: { icon, title, text, link }
        })
        expect(wrapper.find('.step__link').exists()).toBe(true)
    })

})