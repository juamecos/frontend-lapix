/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import Text from './Text';

describe('<Text />', () => {
	let getByTestId: any;
	const dummyText = 'Lorem ipsum';
	test('renders correctly', () => {
		({ getByTestId } = render(<Text h1 title={dummyText} />));
		const element = getByTestId('text-component');
		expect(element).toBeTruthy();
	});
	test('renders at least a children', () => {
		({ getByTestId } = render(<Text h1 title={dummyText} />));
		const element = getByTestId('text-component');
		expect(element.children.length).toBeGreaterThan(0);
	});
});
