import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'src/screens/HomeScreen';

import ProfileNavigator from '../ProfileStackNavigator/ProfileNavigator';
import { spacing } from '../../theme/spacing';
import { color } from 'src/theme';
import { StyleSheet } from 'react-native';
import IconText from 'src/components/IconText';
import FindScreen from 'src/screens/FindScreen';
import NotificationsScreen from 'src/screens/NotificationsScreen';
import { useNavigation } from '@react-navigation/native';
import CustomTabBarButton from '../../components/CustomTabBarButton/CustomTabBarButton';
import Icon from 'react-native-vector-icons/Ionicons';

import AddStackNavigator from '../AddStackNavigator/AddStackNavigator';
import { StoneProvider } from 'src/context/stoneContext/stoneContext';
import { usePermissions } from '../../context/permissionsContext/permissionsContext';
import AddStoneScreen from 'src/screens/AddStoneScreen';

export type StackParamList = {
	HomeScreen: undefined;
	AboutScreen: undefined;
};

const Tab = createBottomTabNavigator();

const HomeTabsNavigator = () => {
	const { navigate } = useNavigation();

	const { locationStatus } = usePermissions();
	return (
		<StoneProvider>
			<Tab.Navigator
				tabBarOptions={{
					showLabel: false,
					keyboardHidesTabBar: true,
					style: {
						position: 'absolute',
						bottom: spacing.vertical.micro,
						left: spacing.horizontal.micro,
						right: spacing.horizontal.micro,
						backgroundColor: color.palette.white,
						borderRadius: spacing.vertical.micro,
						height: spacing.vertical.small,
						...styles.shadow,
					},
				}}
				initialRouteName={'HomeScreen'}
			>
				<Tab.Screen
					name='HomeScreen'
					component={HomeScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<IconText
								h5
								bottom
								iconName={focused ? 'home' : 'home-outline'}
								title='Home'
								onPress={() => navigate('HomeScreen')}
								iconColor={focused ? color.primaryDarker : color.text}
								textColor={focused ? color.primaryDarker : color.text}
							/>
						),
					}}
				/>
				<Tab.Screen
					name='FindScreen'
					component={FindScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<IconText
								h5
								bottom
								iconName={focused ? 'search' : 'search-outline'}
								title='Find'
								onPress={() => navigate('FindScreen')}
								iconColor={focused ? color.primaryDarker : color.text}
								textColor={focused ? color.primaryDarker : color.text}
							/>
						),
					}}
				/>

				{
					<Tab.Screen
						name='AddStoneScreen'
						component={AddStoneScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<Icon
									name='add'
									color={color.palette.white}
									size={spacing.vertical.small}
								/>
							),
							tabBarButton: props => (
								<CustomTabBarButton
									focused
									onPress={() => navigate('AddStoneScreen')} // TODO make navigation without tabs https://reactnavigation.org/docs/hiding-tabbar-in-screens/
									children={props.children}
									style={{
										justifyContent: 'center',
										alignItems: 'center',
										textAlign: 'center',
									}}
								/>
							),
						}}
					/>
				}

				<Tab.Screen
					name='NotificationsScreen'
					component={NotificationsScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<IconText
								h5
								bottom
								iconName={focused ? 'notifications' : 'notifications-outline'}
								title='Notifications'
								onPress={() => navigate('NotificationsScreen')}
								iconColor={focused ? color.primaryDarker : color.text}
								textColor={focused ? color.primaryDarker : color.text}
							/>
						),
						tabBarBadge: 3,
						tabBarBadgeStyle: {
							backgroundColor: color.secondary,
							color: color.textWhite,
						},
					}}
				/>
				<Tab.Screen
					name='ProfileScreen'
					component={ProfileNavigator}
					options={{
						tabBarIcon: ({ focused }) => (
							<IconText
								h5
								bottom
								iconName={focused ? 'person' : 'person-outline'}
								title='Profile'
								onPress={() => navigate('ProfileScreen')}
								iconColor={focused ? color.primaryDarker : color.text}
								textColor={focused ? color.primaryDarker : color.text}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</StoneProvider>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 5,
	},
});

export default HomeTabsNavigator;
