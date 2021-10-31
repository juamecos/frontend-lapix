import React from 'react';
import { View } from 'react-native';
import styles from './SeparatorStyle';

const Separator: React.FC = () => {
	return <View testID='Separator' style={styles.separator} />;
};

export default Separator;
