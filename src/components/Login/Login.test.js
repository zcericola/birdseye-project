import React from 'react';
import ReactDOM from 'react-dom';
import { mount, debug } from 'enzyme';
import Login from './Login';
import '../../setup';
import renderer from 'react-test-renderer';
import Typography from '@material-ui/core/Typography';

describe('Login Component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();

    });
    it('Login renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Has a Login Container', () => {
        const wrapper = mount(<Login />);
        const container = wrapper.find('.loginContainer');
        expect(wrapper).toEqual({});
        wrapper.unmount();

    });
    it('Has the correct title', () => {
        const wrapper = mount(<Login />);
        const welcomeText = wrapper.find(Typography).text();
        expect(welcomeText).toEqual('Welcome to Birdseye!');
        wrapper.unmount();

    });

})
