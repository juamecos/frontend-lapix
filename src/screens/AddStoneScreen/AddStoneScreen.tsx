import React, { FC, useEffect, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import { AddStoneScreenProps } from './AddStoneScreenProps';
import Title from 'src/components/Title';
import BackArrow from 'src/components/BackArrow';
import AddStoneSteps from 'src/components/AddStoneSteps';
import { useStone } from 'src/context/stoneContext/stoneContext';
import ImagePickerOpenButtons from 'src/components/ImagePickerOpenButtons';
import MapComponent from 'src/components/MapComponent';
import Text from 'src/components/Text';
import styles from 'src/screens/AddStoneScreen/AddStoneScreenStyle';
import { spacing } from '../../theme/spacing';
import CustomButton from 'src/components/CustomButton';
import AddStoneForm from 'src/components/Forms/AddStoneForm';
import { ScrollView } from 'react-native-gesture-handler';
import Card from 'src/components/Card';
import { useUser } from 'src/context/userContext.tsx/userContext';

import { cloudinaryUploader } from 'src/utils/Cloudinary';
import { AddStoneDocument, StonesDocument } from '../../generated/graphql';
import LoadingScreen from '../LoadingScreen';
import client from 'src/apollo/client';
import { tonesDocument } from '../../generated/graphql';
import { Asset } from 'react-native-image-picker';
import Published from 'src/components/Published';

/**
 * Screen component description
 *
 * @returns Screen
 */

enum stepsEnum {
	TAKE_PICTURE = 0,
	SET_LOCATION = 1,
	SET_INFO = 2,
	PREVIEW = 3,
	PUBLISHED = 4,
}
const AddStoneScreen: FC<AddStoneScreenProps> = ({ route, navigation }) => {
	// From the previous screen
	const initialParams = route?.params;

	// Context
	const {
		step,
		image,
		location,
		title,
		description,
		setStep,
		setLocation,
		setImage,
		setInfo,
	} = useStone();
	const { userName, avatar } = useUser();
	const [stoneData, setStoneData] = useState();

	const setPreviewData = (image: Asset, userName: string, avatar: string) => {
		console.log(image, avatar, userName);

		return {
			image: image.uri,
			registerDate: new Date().toISOString(),
			user: {
				userName: userName,
				avatar: avatar,
			},
		};
	};

	const labelArray = [
		'Take Picture',
		'Location',
		'Stone Info',
		'Preview',
		'Published',
	];

	const textArray = [
		'Take a picture or pic one from your phone',
		'Tap the map and hold to set the place where you left the stone',
		'Give a title and a description',
		'Check the result',
		'Your stope is being published',
	];

	const registerStone = async () => {
		const cloudinaryResponse = await cloudinaryUploader(image)
			.then(res => res.json())
			.then(value => {
				if (value.secure_url) {
					console.log(value.secure_url);
					console.log('title', title);
					console.log('description', description);
					console.log('latitude', location.latitude);
					console.log('long', location.longitude);

					setImage(value.secure_url);
					client
						.mutate({
							variables: {
								stone: {
									image: value.secure_url,
									title: title,
									description: description,
									latitude: location.latitude,
									longitude: location.longitude,
								},
							},
							mutation: AddStoneDocument,
							refetchQueries: [StonesDocument],
						})
						.then(({ data }) => {
							if (data.addStone.status) {
								setStoneData(data.addStone.stone);

								setStep(step + 1);
							}
						});
				}
			})
			.catch(error => {
				console.log('RegisterStone Error', error);
			});
	};

	// Stage 5 - Published

	// Component JSX
	return (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{}} bounces={false}>
				<View>
					<BackArrow />
					<Title title='Add Stone' />
					<AddStoneSteps labelArray={labelArray} />
					<Text h4 bold title={textArray[step]} style={styles.text} />

					{/* <View style={styles.stepComponentWrapper}> */}
					{step === stepsEnum.TAKE_PICTURE && (
						<ImagePickerOpenButtons step={step} />
					)}
					{step === stepsEnum.SET_LOCATION && <MapComponent />}
					{step === stepsEnum.SET_INFO && <AddStoneForm />}
					{step === stepsEnum.SET_INFO && <AddStoneForm />}
					{step === stepsEnum.PREVIEW && (
						<View style={styles.previewWrapper}>
							<Card data={setPreviewData(image, userName, avatar)} />
						</View>
					)}

					{step === stepsEnum.PUBLISHED && <Published />}
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						{step !== stepsEnum.SET_INFO && step !== stepsEnum.PUBLISHED ? (
							<CustomButton
								medium
								rounded
								disabled={
									(step === stepsEnum.SET_LOCATION &&
										location.longitude === 0 &&
										location.latitude === 0) ||
									!image.uri
								}
								title='Submit'
								styleBtn={{ width: '50%' }}
								onPress={async () => {
									step === stepsEnum.TAKE_PICTURE ||
										(step === stepsEnum.SET_LOCATION && setStep(step + 1));

									step === stepsEnum.PREVIEW && registerStone();
								}}
							/>
						) : (
							<View style={{ height: 400, width: spacing.horizontal.tera }} />
						)}
						<View style={{ height: 400, width: spacing.horizontal.tera }} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default AddStoneScreen;
