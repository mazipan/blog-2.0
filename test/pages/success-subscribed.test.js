/* eslint-env jest */
import { shallowMount } from '@vue/test-utils'
import Component from '~/pages/success-subscribed.vue'

const createWrapper = () => {
  return shallowMount(Component, {
    sync: false
  })
}

describe('pages success-subscribed.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    done()
  })
})
