import { shallowMount } from '@vue/test-utils'
import Partner from '@/components/Utils/Partner.vue'

describe('Partner.vue', () => {
    it('contains title and alt attribute', () => {
        const name = 'sepa'
        const wrapper = shallowMount(Partner, {
            propsData: { name }
        })
        expect(wrapper.attributes().title).toMatch(name)
        expect(wrapper.attributes().alt).toMatch(name)
    })
})