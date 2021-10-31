import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from 'src/screens/LoginScreen';
import SignUpScreen from 'src/screens/SignUpScreen';
import ForgotScreen from 'src/screens/ForgotScreen';

export type StackParamList = {
	LoginScreen: undefined;
	SignUpScreen: undefined;
	ForgotScreen: undefined;
};

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={'LoginScreen'}
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Stack.Screen name='LoginScreen' component={LoginScreen} />
			<Stack.Screen name='SignUpScreen' component={SignUpScreen} />
			<Stack.Screen name='ForgotScreen' component={ForgotScreen} />
		</Stack.Navigator>
	);
};

export default AuthStackNavigator;
