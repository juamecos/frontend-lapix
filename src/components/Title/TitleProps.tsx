import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface Props {
	styleWrapper?: StyleProp<ViewStyle>;
	styleText?: TextStyle;
	title: string;
}
