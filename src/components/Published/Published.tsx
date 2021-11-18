import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './PublishedStyle';
import Loader from 'src/components/Loader';
import { useNavigation } from '@react-navigation/native';
import Text from '../Text';
import { useStone } from 'src/context/stoneContext/stoneContext';
import { stepsEnum } from 'src/screens/AddStoneScreen/AddStoneScreen';

export type Props = {
	name?: string;
};

const Published: React.FC<Props> = ({ ...props }) => {
	const { navigate } = useNavigation();
	const { step, setStep } = useStone();

	useEffect(() => {
		setTimeout(() => {
			setStep(stepsEnum.TAKE_PICTURE);
			navigate('HomeScreen');
		}, 700);
	}, []);
	return (
		<View testID='Published' style={styles.container}>
			<Text title='Registering the stone' />
			<Loader />
		</View>
	);
};

export default Published;
