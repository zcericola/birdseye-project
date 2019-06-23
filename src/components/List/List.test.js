import React from 'react';
import { mount, debug } from 'enzyme';
import List from './List';
import Typography from '@material-ui/core/Typography';
import renderer from 'react-test-renderer';
import '../../setup';

describe('List component', () => {

    it('matches the snapshot', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();

    });
    it('title should have two inner elements', () => {
        const wrapper = mount(<List />);
        const title = wrapper.find(Typography);
        expect(title.length).toEqual(2);
        wrapper.unmount();
    });
});
