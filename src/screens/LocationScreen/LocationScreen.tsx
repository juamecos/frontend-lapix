import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import style from './LocationScreenStyle';
import { LocationScreenProps } from './LocationScreenProps';

/**
 * Screen component description
 *
 * @returns Screen
 */
const LocationScreen: FC<LocationScreenProps> = ({ route, navigation }) => {
	// From the previous screen
	const initialParams = route?.params;

	// Context

	// Custom hooks

	// Internal state

	useEffect(() => {}, []);

	// Component JSX
	return (
		<SafeAreaView
			// style={}
			testID='LocationScreen'
		>
			<Text
			// style={}
			>
				This is a screen template
			</Text>
		</SafeAreaView>
	);
};

export default LocationScreen;
