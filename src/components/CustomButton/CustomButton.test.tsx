/**
 * @format
 */

import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CustomButton from './CustomButton';
const mockOnPress = jest.fn();

type ReactTestInstance = {
	type: string | Function;
	props: { [propName: string]: any };
	parent: null | ReactTestInstance;
	children: Array<ReactTestInstance | string>;
};

describe('<CustomButton />', () => {
	let element: ReactTestInstance;

	beforeEach(() => {
		const { getByTestId } = render(
			<CustomButton title='' onPress={mockOnPress} />
		);

		element = getByTestId('custom-button');
	});
	test('renders correctly', () => {
		expect(element).toBeTruthy();
	});
	test('calls onPress when pressed', () => {
		// known issue https://www.gitmemory.com/issue/testing-library/native-testing-library/20/494558534
		// preffer to ignore the error than modifiying the queries.d.ts Exported method as suggested in article
		// @ts-ignore
		fireEvent.press(element);
		expect(mockOnPress).toHaveBeenCalled();
	});
});
