import { shallowMount } from '@vue/test-utils'
import Product from '@/components/Utils/Product.vue'

describe('Product.vue', () => {
    it('renders Product Name', () => {
        const name = 'Product Name'
        const image = 'diapers';
        const wrapper = shallowMount(Product, {
            propsData: { name, image }
        })
        expect(wrapper.find('.product__title').text()).toMatch(name)
    })

    it('contains product image', () => {
        const name = 'Product Name'
        const image = 'diapers';
        const wrapper = shallowMount(Product, {
            propsData: { name, image }
        })
        expect(wrapper.find('.product__image img')).toBeTruthy()
    })

    it('contains list', () => {
        const name = 'Product Name'
        const image = 'diapers';
        const wrapper = shallowMount(Product, {
            propsData: { name, image }
        })
        expect(wrapper.find('ul')).toBeTruthy()
    })
})