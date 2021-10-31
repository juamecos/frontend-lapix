/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import LocationScreen from './LocationScreen';
import { LocationScreenProps } from './LocationScreenProps';

const createTestProps = (props: object) => ({
	...props,
});

describe('<LocationScreen />', () => {
	const props = createTestProps({});
	const { getByTestId } = render(<LocationScreen {...props} />);

	test('renders correctly', () => {
		const element = getByTestId('LocationScreen');
		expect(element).toBeTruthy();
	});
});
