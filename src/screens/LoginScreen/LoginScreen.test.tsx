/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import LoginScreen from './LoginScreen';

const createTestProps = (props: object) => ({
	...props,
});

describe('<LoginScreen />', () => {
	const props = createTestProps({});

	test('renders correctly', () => {
		render(<LoginScreen {...props} />);
	});
	test('has text with login', () => {
		const { getByText } = render(<LoginScreen {...props} />);
		getByText('Login');
	});
	test('has input for email', () => {
		const { getByPlaceholderText } = render(<LoginScreen {...props} />);
		getByPlaceholderText('E-mail');
	});
	test('has input for password', () => {
		const { getByPlaceholderText } = render(<LoginScreen {...props} />);
		getByPlaceholderText('Password');
	});
	test('has a Submit button', () => {
		const { getByTestId } = render(<LoginScreen {...props} />);
		getByTestId('submit-button');
	});
});
