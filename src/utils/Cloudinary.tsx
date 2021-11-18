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

export interface ICloudinaryResponse {
	asset_id: string;
	public_id: string;
	version: number;
	version_id: string;
	signature: string;
	width: number;
	height: number;
	format: string;
	resource_type: string;
	created_at: Date;
	tags: any[];
	bytes: number;
	type: string;
	etag: string;
	placeholder: boolean;
	url: string;
	secure_url: string;
	access_mode: string;
}

export type ICloudinaryUploader = (
	image: Asset
) => Promise<ICloudinaryResponse>;

export const cloudinaryUploader = async (image: Asset) => {
	const formData = new FormData();
	const base64img = `data:image/png;base64,${image.base64}`;
	formData.append('file', base64img);
	formData.append('upload_preset', CLOUDINARY_CLOUD_NAME);
	formData.append('cloud_name', CLOUDINARY_CLOUD_NAME);

	const response = await fetch(CLOUDINARY_BASE_URL, {
		method: 'post',
		body: formData,
	});

	return response;
};
