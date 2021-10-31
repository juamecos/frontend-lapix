import { TextProps, TextStyle } from 'react-native';

export interface Props extends TextProps {
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	p?: boolean;
	bold?: boolean;
	italic?: boolean;
	title: string | undefined;
	textColor?: string;
	style?: TextStyle;
}
