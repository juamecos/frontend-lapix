import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

export interface Props {
	title: string;
	styleBtn?: ViewStyle;
	styleText?: TextStyle;
	iconName?: string;
	iconSize?: number;
	iconColor?: string;
	disabled?: boolean;
	right?: boolean;
	textButton?: boolean;
	textColor?: string;
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
	rounded?: boolean;
	bordered?: boolean;
	small?: boolean;
	medium?: boolean;
	large?: boolean;
	onPress: (event: GestureResponderEvent) => void;
}
