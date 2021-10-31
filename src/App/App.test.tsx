import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from 'src/navigation/MainNavigator';
import App from './App';
import { debug } from 'react-native-reanimated';

const createTestProps = (props: object) => ({
	...props,
});

describe.skip('<App />', () => {
	const props = createTestProps({});

	test('renders the correct screen', async () => {
		render(<App />);
		// const { getByText } = render(
		// 	<NavigationContainer>
		// 		<MainNavigator />
		// 	</NavigationContainer>
		// );
		// await waitFor(() => getByText('HomeScreen'));
		debug();
	});
});
