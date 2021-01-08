import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import SelectSize from '@/components/Utils/SelectSize.vue'
const localVue = createLocalVue();
localVue.use(Vuex);

describe('SelectSize.vue', () => {
    const val = 2;
    const name = 'test'
    const wrapper = shallowMount(SelectSize, {
        propsData: { val, name },
        computed: {
            size () {
                return 1
            }
        }
    })

    it('renders size', () => {
        expect(wrapper.find('.radiobutton__size').text()).toMatch(val.toString())
    })

    it('has no subtext if not passed', () => {
        expect(wrapper.find('.radiobutton__description').exists()).toBe(false)
    })
})