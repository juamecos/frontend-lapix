import React from 'react';
import { color } from 'src/theme';
import IconText from '../IconText';
import styles from './BackArrowStyle';

export type Props = {
	onPress?: any;
};

const BackArrow: React.FC<Props> = ({ onPress }) => {
	return (
		<IconText
			bottom
			iconName='arrow-back-outline'
			onPress={onPress}
			iconColor={color.primary}
			style={styles.container}
		/>
	);
};

export default BackArrow;
