import React from 'react';
import ReactDOM from 'react-dom';
import { mount, debug } from 'enzyme';
import renderer from 'react-test-renderer';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
import '../../setup';

describe('Search component', () => {
    it('Search renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('matches the snapshot', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();

    });
    it('Has a Search container', () => {
        const wrapper = mount(<Search />);

        const container = wrapper.find(Grid);
        expect(container).toEqual({});
        wrapper.unmount();
    });

});
