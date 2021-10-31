import React from 'react';
import { View, Text } from 'react-native';
import styles from './SelectPictureStyle';

export type Props = {
	name?: string;
};

const SelectPicture: React.FC<Props> = ({ ...props }) => {
	return (
		<View testID='SelectPicture'>
			<Text>
				Ara vols llevar la barra de baix i hols esre staves mirant el
				StoneContext
			</Text>
		</View>
	);
};

export default SelectPicture;
