/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';

import SignUpForm from './SignUpForm';

const createTestProps = (props: object) => ({
	...props,
});

describe('<SignUpForm />', () => {
	const props = createTestProps({});
	const { getByTestId } = render(<SignUpForm {...props} />);

	test('renders correctly', () => {
		getByTestId('sign-up-form');
	});

	test('renders error messages when username is not provided', async () => {
		const { getByPlaceholderText, queryAllByText } = render(
			<SignUpForm {...props} />
		);

		const usernameInput = getByPlaceholderText('Username');

		await waitFor(() => {
			fireEvent.changeText(usernameInput, '');
		});

		await waitFor(() => {
			fireEvent(usernameInput, 'blur');
		});
		await waitFor(() => {
			expect(queryAllByText('Username is required')).toHaveLength(1);
		});
	});

	test('renders error messages when email is not provided', async () => {
		const { getByPlaceholderText, queryAllByText } = render(
			<SignUpForm {...props} />
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

	test('renders error messages when password is invalid', async () => {
		const { getByPlaceholderText, queryAllByText } = render(
			<SignUpForm {...props} />
		);

		const passwordInput = getByPlaceholderText('Password');

		await waitFor(() => {
			fireEvent.changeText(passwordInput, '');
		});

		await waitFor(() => {
			fireEvent(passwordInput, 'blur');
		});

		await waitFor(() => {
			expect(queryAllByText('Password is required')).toHaveLength(1);
		});
	});

	test('renders error messages when confirm password is not provided', async () => {
		const { getByPlaceholderText, queryAllByText } = render(
			<SignUpForm {...props} />
		);

		const confirmPasswordInput = getByPlaceholderText('Confirm Password');

		await waitFor(() => {
			fireEvent.changeText(confirmPasswordInput, '');
		});

		await waitFor(() => {
			fireEvent(confirmPasswordInput, 'blur');
		});

		await waitFor(() => {
			expect(queryAllByText('Confirm password is required')).toHaveLength(1);
		});
	});

	test('renders error messages when passwords do not match', async () => {
		const { getByPlaceholderText, queryAllByText } = render(
			<SignUpForm {...props} />
		);

		const passwordInput = getByPlaceholderText('Password');

		await waitFor(() => {
			fireEvent.changeText(passwordInput, '123456aA');
		});

		const confirmPasswordInput = getByPlaceholderText('Confirm Password');

		await waitFor(() => {
			fireEvent.changeText(confirmPasswordInput, '12345678');
		});

		await waitFor(() => {
			fireEvent(confirmPasswordInput, 'blur');
		});

		await waitFor(() => {
			expect(queryAllByText('Passwords do not match')).toHaveLength(1);
		});
	});
});
