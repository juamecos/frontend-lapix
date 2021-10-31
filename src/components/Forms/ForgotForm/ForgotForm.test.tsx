/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import ForgotForm from './ForgotForm';

const createTestProps = (props: object) => ({
	...props,
});

describe('<ForgotForm />', () => {
	const props = createTestProps({});
	const { getByTestId } = render(<ForgotForm {...props} />);

	test('renders correctly', () => {
		getByTestId('forgot-form');
	});

	test('renders error messages when email is not provided', async () => {
		const { queryAllByText, getByPlaceholderText } = render(
			<ForgotForm {...props} />
		);

		const emailInput = getByPlaceholderText('E-mail');

		await waitFor(() => {
			fireEvent.changeText(emailInput, '');
		});

		await waitFor(() => {
			fireEvent(emailInput, 'blur');
		});
		await waitFor(() => {
			expect(queryAllByText('Email is required')).toHaveLength(1);
		});
	});

	test('does not show error messages when input values are valid', async () => {
		const { getByPlaceholderText, getByText, queryAllByText } = render(
			<ForgotForm {...props} />
		);
		const emailInput = getByPlaceholderText('E-mail');
		const submitButton = getByText('Submit');

		await waitFor(() => {
			fireEvent.changeText(emailInput, 'aaa@aaa.aaa');
		});

		fireEvent.press(submitButton);

		await waitFor(() => {
			expect(queryAllByText('Email is required')).toHaveLength(0);
		});
	});
});
