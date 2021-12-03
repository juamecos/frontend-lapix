import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../Text';
import styles from './IconTextStyle';
import { color } from 'src/theme/color';
import { ViewStyle } from 'react-native';

export type Props = {
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	p?: boolean;
	bold?: boolean;
	italic?: boolean;
	iconName: string;
	title?: string;
	size?: number;
	iconColor?: string;
	iconShadow?: boolean;
	textColor?: string;
	badge?: boolean;
	badgeData?: number | string | null;
	bottom?: boolean;
	style?: ViewStyle;
	textStyle?: any;
	onPress?: any;
};

/**
 * Component formed by an Icon and a Text
 *
 * @param {*} {
 * 	iconName,
 * 	title,
 * 	size = 20,
 * 	iconColor,
 * 	textColor,
 * 	bottom = false, // If true, the text is on the bottom. Default is false, flexdirection row
 * 	style, // Wrapper style
 * 	...rest
 * }
 * @return {*} React Functional Component
 */
const IconText: React.FC<Props> = ({
	h1,
	h2,
	h3,
	h4,
	h5,
	p,
	bold,
	italic,
	iconName,
	title,
	size = 20,
	iconColor,
	iconShadow,
	textColor,
	badge,
	badgeData,
	bottom = false,
	style,
	textStyle,
	...rest
}) => {
	return (
		<TouchableOpacity
			testID='IconText'
			activeOpacity={0.9}
			onPress={() => {}}
			style={[
				styles.container,
				// eslint-disable-next-line react-native/no-inline-styles
				bottom && {
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				},
				style,
			]}
			{...rest}
		>
			<Icon
				name={iconName}
				size={size}
				color={color.primary && iconColor}
				style={[iconShadow && styles.iconShadow]}
			/>
			<Text
				h1={h1}
				h2={h2}
				h3={h3}
				h4={h4}
				h5={h5}
				p={p}
				bold={bold}
				italic={italic}
				title={title}
				textColor={color.primary && textColor}
				style={[bottom ? styles.textBottom : styles.text, textStyle]}
			/>
			{badge && (
				<Text
					title={badgeData?.toString()}
					textColor={color.textWhite}
					style={[
						styles.badge,
						bottom ? { top: 4, left: 20 } : { top: 4, left: 10 },
					]}
				/>
			)}
		</TouchableOpacity>
	);
};

export default IconText;
