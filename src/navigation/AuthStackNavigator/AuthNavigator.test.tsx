import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import AuthStackNavigator from './AuthNavigator';

AuthStackNavigator;

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe.skip('Testing react navigation', () => {
	test('clicking on the button takes you to the Login page', async () => {
		const component = (
			<NavigationContainer>
				<AuthStackNavigator />
			</NavigationContainer>
		);

		// const { findByText } = render(component);
		// const toClick = await findByText('Create an account');
		// console.log(toClick);

		// fireEvent(toClick, 'press');
		// const newSubtitle = await findByText(
		// 	'Log in to track and share your painted stones.'
		// );

		// expect(newSubtitle).toBeTruthy();
	});
});
