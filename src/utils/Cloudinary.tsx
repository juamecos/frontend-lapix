import { useState } from 'react';
import { Alert } from 'react-native';
import { Asset } from 'react-native-image-picker';

import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_BASE_URL } from '@env';

export interface IResult {
	status: boolean;
	message: string;
}

export interface ICloudinaryResult extends IResult {
	status: boolean;
	message: string;
	image: string;
}

export type ICloudinaryUploader = (image: Asset) => void;

export const cloudinaryUploader = async (image: Asset) => {
	const formData = new FormData();
	const base64img = `data:image/png;base64,${image.base64}`;
	formData.append('file', base64img);
	formData.append('upload_preset', CLOUDINARY_CLOUD_NAME);
	formData.append('cloud_name', CLOUDINARY_CLOUD_NAME);
	formData.append('folder', 'stones');
	console.log('from cloudinaryUploader, formData', formData);

	const response = await fetch(CLOUDINARY_BASE_URL, {
		method: 'post',
		body: formData,
	});

	return response;
};
