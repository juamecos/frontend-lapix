import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import style from './EditProfileScreenStyle';
import { EditProfileScreenProps } from './EditProfileScreenProps';
import Text from 'src/components/Text';
import Title from 'src/components/Title';
import Avatar from 'src/components/Avatar';
import IconText from 'src/components/IconText';
import { color } from 'src/theme';
import Separator from 'src/components/Separator';
import BackArrow from 'src/components/BackArrow';
import { useUser } from 'src/context/userContext.tsx/userContext';
import CustomButton from 'src/components/CustomButton';
import useModal from 'src/hooks/useModal';
import Modal from 'src/components/Modal';

/**
 * Screen component description
 *
 * @returns Screen
 */
const EditProfileScreen: FC<EditProfileScreenProps> = ({
	route,
	navigation,
}) => {
	// From the previous screen
	const initialParams = route?.params;

	const { userName } = useUser();
	const { setModalOpen, modalOpen, toggleModal } = useModal(false);

	// Context

	// Custom hooks

	// Internal state

	useEffect(() => {}, []);

	// Component JSX

	return (
		<SafeAreaView
			// style={}
			testID='EditProfileScreen'
			style={style.container}
		>
			<CustomButton title='OpenModal' onPress={() => toggleModal()} />

			<BackArrow onPress={() => navigation?.goBack()} />
			<Title title='Edit Profile' />
			<TouchableOpacity
				style={style.avatarWrapper}
				onPress={() => console.log('Pressed   ')}
			>
				<Avatar />
				<Text h4 bold title={userName} />
			</TouchableOpacity>
			<Separator />
			<View style={style.menuWrapper}>
				<IconText
					iconName='location-outline'
					iconColor={color.secondary}
					title='Location'
				/>

				<IconText
					iconName='reader-outline'
					iconColor={color.secondary}
					title='Bio'
				/>

				<IconText
					iconName='mail-outline'
					iconColor={color.secondary}
					title='Email'
				/>

				<IconText
					iconName='settings-outline'
					iconColor={color.secondary}
					title='Settings'
				/>
				<IconText
					iconName='lock-closed-outline'
					iconColor={color.secondary}
					title='Password'
				/>
			</View>
			<Modal isVisible={modalOpen} title='Modal' handleClose={toggleModal}>
				<Text title='Modal Text' />
				<Text title='Modal Text' />
				<Text title='Modal Text' />
			</Modal>
		</SafeAreaView>
	);
};

export default EditProfileScreen;
