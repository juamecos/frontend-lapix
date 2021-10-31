import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../../screens/EditProfileScreen/EditProfileScreen';

export type StackParamList = {
	ProfileScreen: undefined;
	EditProfileScreen: undefined;
};

const Stack = createStackNavigator();

const ProfileNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={'ProfileScreen'}
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Stack.Screen name='ProfileScreen' component={ProfileScreen} />
			<Stack.Screen name='EditProfileScreen' component={EditProfileScreen} />
		</Stack.Navigator>
	);
};

export default ProfileNavigator;
