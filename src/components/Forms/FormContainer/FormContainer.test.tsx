/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import FormContainer from './FormContainer';

const createTestProps = (props: object) => ({
	...props,
});

describe('<FormContainer />', () => {
	const props = createTestProps({});
	const { getByTestId } = render(<FormContainer {...props} />);

	test('renders correctly', () => {
		const element = getByTestId('form-container');
		expect(element).toBeTruthy();
	});
});
