import { useState } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import {
	Asset,
	launchImageLibrary,
	launchCamera,
	CameraOptions,
} from 'react-native-image-picker';

const options: CameraOptions = {
	mediaType: 'photo',
	maxWidth: 700,
	maxHeight: 400,
	quality: 0.7,
	includeBase64: true,
	saveToPhotos: true,
};

const useImagePicker = () => {
	const [image, setImage] = useState<Asset>();
	const [errorMessage, setErrorMessage] = useState<string>();

	const handleImagePickerResponse = (response: ImagePickerResponse) => {
		if (response.didCancel) {
			console.log('User cancelled the camera', response.didCancel);
		} else if (response.errorCode) {
			setImage(null);
			console.log('Error code', response.errorCode);
		} else if (response.errorMessage) {
			setErrorMessage(response.errorMessage);
			setImage(null);
		}
		if (response.assets?.length) {
			const newImage = {
				base64: response.assets[0].base64,
				uri: response.assets[0].uri,
				fileName: response.assets[0].fileName,
				type: response.assets[0].type,
			};
			setImage(newImage);
		}
	};

	const onHandleOpenCamera = () => {
		launchCamera(options, response => handleImagePickerResponse(response));
	};

	const onHandleOpenLibrary = () => {
		launchImageLibrary(options, response =>
			handleImagePickerResponse(response)
		);
	};

	return { image, errorMessage, onHandleOpenCamera, onHandleOpenLibrary };
};

export default useImagePicker;
