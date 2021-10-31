/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import ForgotScreen from './ForgotScreen';
import { ForgotScreenProps } from './ForgotScreenProps';

const createTestProps = (props: object) => ({
	...props,
});

describe('<ForgotScreen />', () => {
	const props = createTestProps({});

	test('renders correctly', () => {
		render(<ForgotScreen {...props} />);
	});
	test('has text with Restore Password', () => {
		const { getByText } = render(<ForgotScreen {...props} />);
		getByText('Restore Password');
	});
	test('has input for email', () => {
		const { getByPlaceholderText } = render(<ForgotScreen {...props} />);
		getByPlaceholderText('E-mail');
	});

	test('has a button with title Submit', () => {
		const { getByTestId } = render(<ForgotScreen {...props} />);
		getByTestId('submit-button');
	});
});
