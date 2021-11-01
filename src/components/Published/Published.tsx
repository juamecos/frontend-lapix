import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './PublishedStyle';
import Loader from 'src/components/Loader';
import { useNavigation } from '@react-navigation/native';

export type Props = {
	name?: string;
};

const Published: React.FC<Props> = ({ ...props }) => {
	const { navigate } = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigate('HomeScreen');
		}, 700);
	}, []);
	return (
		<View testID='Published' style={styles.container}>
			<Loader />
		</View>
	);
};

export default Published;
