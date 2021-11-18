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
	children: React.ReactNode;
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
			style={{
				...styles.container,
				...shadow.dark,
			}}
			onPress={onPress}
		>
			<View
				style={[
					styles.wrapper,
					shadow.light,
					focused && {
						...shadow.dark,
						...styles.focused,
					},
				]}
			>
				{children}
			</View>
		</TouchableOpacity>
	);
};

export default CustomTabBarButton;
