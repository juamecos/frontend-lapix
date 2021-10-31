/**
 * @format
 */

import 'react-native';
import React from 'react';

import { cleanup, render } from '@testing-library/react-native';

import SignUpScreen from './SignUpScreen';

afterEach(cleanup);

const createTestProps = (props: object) => ({
	...props,
});

describe('<SignUpScreen />', () => {
	const props = createTestProps({});

	test('renders correctly', () => {
		const { getByTestId } = render(<SignUpScreen {...props} />);
		getByTestId('SignUpScreen');
	});
});
