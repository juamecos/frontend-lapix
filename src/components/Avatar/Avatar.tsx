import React from 'react';
import { View, Image } from 'react-native';
import styles from './AvatarStyle';
import { shadow } from '../../theme/shadow';

export type Props = {
	avatar?: string;
	radius?: number;
};

const Avatar: React.FC<Props> = ({ avatar, radius }) => {
	return (
		<View
			testID='Avatar'
			style={{ ...styles.container, height: radius, width: radius }}
		>
			<Image
				resizeMode='cover'
				resizeMethod='resize'
				source={avatar ? avatar : require('src/assets/avatar-1.png')}
				style={styles.image}
			/>
		</View>
	);
};

export default Avatar;
