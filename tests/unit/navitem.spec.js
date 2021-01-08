import { shallowMount } from '@vue/test-utils'
import NavItem from '@/components/Utils/NavItem.vue'

describe('NavItem.vue', () => {
    it('renders title when passed', () => {
        const title = 'Home'
        const wrapper = shallowMount(NavItem, {
            propsData: { title }
        })
        expect(wrapper.text()).toMatch(title)
    })
    it('NavItem is active when active is passed', () => {
        const active = true
        const wrapper = shallowMount(NavItem, {
            propsData: { active }
        })
        expect(wrapper.classes()).toContain('nav-item--active')
    })
    it('NavItem is not active when active not passed', () => {
        const wrapper = shallowMount(NavItem)
        expect(wrapper.classes()).not.toContain('nav-item--active')
    })
})