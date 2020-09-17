import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr} from '../../../Utils/index'
import Navbar from '../Navbar';

const setUp = (props = {}) => {
    const component = shallow(<Navbar {...props} />);
    return component;
}

describe("Navbar Component", () => {
    let component;
    
    beforeEach(() => {
        component = setUp();
    })
    it('it should render', () => {
        const wrapper = findByTestAttr(component, 'header-cls');
        expect(wrapper.length).toBe(1);
    })
    it('it should display site name', () => {
        const siteName = findByTestAttr(component,'site-name');
        expect(siteName.length).toBe(1);
    })
})