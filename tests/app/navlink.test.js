import React from 'react';
import { mount } from 'enzyme';
import NavLink from '../../src/app/navlink';

describe('NavLink', () => {
    it('name must match', () => {
        const component = mount(
            <NavLink to='/' name='test' />
        );
        expect(component.text()).toEqual('test');
    });
});