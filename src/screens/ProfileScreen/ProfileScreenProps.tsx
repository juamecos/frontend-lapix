// @ts-nocheck
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigation/MainNavigator';

type ProfileScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'ProfileScreen'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ProfileScreen'>;

export type ProfileScreenProps = {
	navigation?: ProfileScreenNavigationProp;
	route?: ProfileScreenRouteProp;
	otherProps?: any;
};
