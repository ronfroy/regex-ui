import React from 'react'
import { mount } from 'enzyme'
import NavLink from 'src/app/navlink'

describe('Rendering', () => {
    const component = mount(<NavLink to='/' name='test'/>)

    it('name must match', () => {
        expect(component.text()).toEqual('test')
    })
})