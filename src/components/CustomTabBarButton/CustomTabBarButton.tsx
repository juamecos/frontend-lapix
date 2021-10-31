import React from 'react';
import {
	View,
	TouchableOpacity,
	GestureResponderEvent,
	Animated,
} from 'react-native';
import styles from './CustomTabBarButtonStyle';
import { shadow } from '../../theme/shadow';
import { color } from 'src/theme';

export type Props = {
	style?: any;
	focused: boolean;
	onPress: (event: GestureResponderEvent) => void;
	children: JSX.Element;
};

const CustomTabBarButton: React.FC<Props> = ({
	onPress,
	children,
	focused,
}) => {
	return (
		<TouchableOpacity
			testID='CustomTabBarButton'
			activeOpacity={0.85}
			// style={{
			// 	...styles.wrapper,
			// 	...shadow.dark,
			// }}
			style={[
				styles.wrapper,
				shadow.light,
				focused && {
					...shadow.dark,
					...styles.focused,
				},
			]}
			onPress={onPress}
		>
			<View>{children}</View>
		</TouchableOpacity>
	);
};

export default CustomTabBarButton;
