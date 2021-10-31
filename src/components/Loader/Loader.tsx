import React from 'react';
import { View, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { color as themeColor } from 'src/theme';
import styles from './LoaderStyle';

const Loader: React.FC<ActivityIndicatorProps> = ({
	size = 'large',
	color = themeColor.primary,
	...props
}) => {
	return (
		<View testID='Loader' style={styles.container}>
			<ActivityIndicator size={size} color={color} {...props} />
		</View>
	);
};

export default Loader;
