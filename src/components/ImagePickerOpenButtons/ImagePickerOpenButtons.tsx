/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import useImagePicker from 'src/hooks/useImagePicker';
import CustomButton from '../CustomButton';
import styles from './ImagePickerOpenButtonsStyle';
import { useStone } from '../../context/stoneContext/stoneContext';

export type Props = {
	step?: number;
};

const ImagePickerOpenButtons: React.FC<Props> = () => {
	const { step, setStep, setImage } = useStone();
	const { image, errorMessage, onHandleOpenLibrary, onHandleOpenCamera } =
		useImagePicker();

	useEffect(() => {
		if (errorMessage) {
			console.log('AddStoneStep error', errorMessage);

			// TODO Alert the user there was an error
			setImage(null);
			setStep(0);
		}
	}, [errorMessage]);

	useEffect(() => {
		if (image) {
			console.log('AddStoneStep image', image.fileName);

			setImage(image);
			setStep(1);
		}
	}, [image]);
	return (
		<View testID='ImagePickerOpenButtons' style={styles.container}>
			<CustomButton
				medium
				primary
				title='Open Camera'
				iconName='camera-outline'
				iconSize={20}
				onPress={() => onHandleOpenCamera()}
			/>
			<CustomButton
				medium
				secondary
				title='Open Gallery'
				iconName='image-outline'
				iconSize={20}
				onPress={() => onHandleOpenLibrary()}
			/>
		</View>
	);
};

export default ImagePickerOpenButtons;
