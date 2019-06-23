import React from 'react';
import { shallow, mount, debug } from 'enzyme';
import Dashboard from './Dashboard';
import Theme from '../Theme/Theme';
import renderer from 'react-test-renderer';
import '../../setup';

describe('Dashboard component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Theme><Dashboard /></Theme>).toJSON();
        expect(tree).toMatchSnapshot();

    });
    it('Has 3 List components', () => {
        const wrapper = mount(<Theme><Dashboard /></Theme>);
        const lists = wrapper.find('List');
        expect(lists.length).toEqual(3);
    });
});
