import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../../components/HelloWorld.vue'

describe('HelloWorld Component', () => {
  it('renders the component', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello from test'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct message', () => {
    const testMessage = 'Test Message'
    const wrapper = mount(HelloWorld, {
      props: {
        msg: testMessage
      }
    })
    expect(wrapper.text()).toContain(testMessage)
  })

  it('increments count when button is clicked', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello'
      }
    })
    
    const button = wrapper.find('button')
    expect(button.text()).toContain('count is 0')
    
    await button.trigger('click')
    expect(button.text()).toContain('count is 1')
    
    await button.trigger('click')
    expect(button.text()).toContain('count is 2')
  })
}) 