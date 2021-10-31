// @ts-nocheck
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigation/MainNavigator';

type SignUpScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'SignUpScreen'
>;
type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUpScreen'>;

export type SignUpScreenProps = {
	navigation?: SignUpScreenNavigationProp;
	route?: SignUpScreenRouteProp;
	otherProps?: any;
};
