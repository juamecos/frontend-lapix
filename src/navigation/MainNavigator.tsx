import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackNavigator from './AuthStackNavigator';
import HomeTabsNavigator from './HomeTabsNavigator';

import { useAuth } from 'src/context/authContext/authContext';

import { useMeQuery } from 'src/generated/graphql';
import { getToken } from '../utils/tokens';
import { useUser } from '../context/userContext.tsx/userContext';
import { StoneProvider } from 'src/context/stoneContext/stoneContext';
import AddStoneScreen from 'src/screens/AddStoneScreen';
import AddStackNavigator from './AddStackNavigator/AddStackNavigator';

export type StackParamList = {
	HomeScreen: undefined;
	AboutScreen: undefined;
};

const Stack = createStackNavigator();

const Navigator = () => {
	const { token, status, signOut } = useAuth();
	const { setUser, removeUser } = useUser();
	const { data, loading, error, refetch } = useMeQuery({
		fetchPolicy: 'network-only',
		variables: {
			include: false,
		},
		context: {
			headers: {
				authorization: token ? token : null,
				'x-info': 'Navigator',
			},
		},
	});

	useEffect(() => {
		try {
			if (token !== null) {
				refetch();
				setUser(data?.me.user);
				return;
			} else {
				getToken().then(token => {
					if (!token) {
						signOut();
						removeUser();
					}
				});
			}
		} catch (e) {
			// catch error here
			// Maybe sign_out user!
		}
	}, []);

	useEffect(() => {
		try {
			if (token !== null && data?.me.user) {
				refetch();
				setUser(data?.me.user);
				return;
			} else {
				getToken().then(token => {
					if (!token) {
						signOut();
						removeUser();
					}
				});
			}
		} catch (e) {
			// catch error here
			console.log(e);
			signOut();
			removeUser();
			// Maybe sign_out user!
		}
	}, [data]);
	return (
		<Stack.Navigator
			initialRouteName={'AuthStackNavigator'}
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			{status === 'Authenticated' ? (
				<>
					<Stack.Screen name='HomeTabsScreen' component={HomeTabsNavigator} />
					{/* <Stack.Screen name='AddStoneScreen' component={AddStackNavigator} /> */}
				</>
			) : (
				<Stack.Screen
					name='AuthStackNavigator'
					component={AuthStackNavigator}
				/>
			)}
		</Stack.Navigator>
	);
};

export default Navigator;
