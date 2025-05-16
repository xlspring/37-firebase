import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import HelloWorld from '../components/HelloWorld.vue'

describe('App Component', () => {
  it('renders the component', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the HelloWorld component', () => {
    const wrapper = mount(App)
    const helloWorld = wrapper.findComponent(HelloWorld)
    expect(helloWorld.exists()).toBe(true)
  })

  it('passes the correct props to HelloWorld', () => {
    const wrapper = mount(App)
    const helloWorld = wrapper.findComponent(HelloWorld)
    expect(helloWorld.props('msg')).toBe('Vite + Vue')
  })

  it('renders both logo images', () => {
    const wrapper = mount(App)
    const images = wrapper.findAll('img.logo')
    expect(images.length).toBe(2)
  })
}) 