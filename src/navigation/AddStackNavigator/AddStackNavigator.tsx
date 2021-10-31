import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AddStoneScreen from 'src/screens/AddStoneScreen';
import LocationScreen from 'src/screens/LocationScreen';
import PermissionsScreen from 'src/screens/PermissionsScreen';
import { usePermissions } from '../../context/permissionsContext/permissionsContext';
import LoadingScreen from 'src/screens/LoadingScreen';

export type AddStackParamsList = {
	PermissionsScreen: undefined;
	AddScreen: undefined;
	LocationScreen: undefined;
};

const Stack = createStackNavigator<AddStackParamsList>();

const AddStackNavigator = () => {
	const { locationStatus } = usePermissions();

	if (locationStatus === 'unavailable') {
		return <LoadingScreen />;
	}
	return (
		<Stack.Navigator
			initialRouteName={'PermissionsScreen'}
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			{locationStatus === 'blocked' ? (
				<Stack.Screen name='PermissionsScreen' component={PermissionsScreen} />
			) : (
				<>
					<Stack.Screen name='AddScreen' component={AddStoneScreen} />
					<Stack.Screen name='LocationScreen' component={LocationScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};

export default AddStackNavigator;
