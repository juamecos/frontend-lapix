/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { ProfileScreenProps } from './ProfileScreenProps';
import style from './ProfileScreenStyle';
import IconText from '../../components/IconText/IconText';
import Avatar from 'src/components/Avatar';
import Text from 'src/components/Text';
import { color } from 'src/theme';
import Title from 'src/components/Title';
import { useUser } from 'src/context/userContext.tsx/userContext';
import { useState } from 'react';
import { useAuth } from 'src/context/authContext/authContext';

/**
 * Screen component description
 *
 * @returns Screen
 */
const ProfileScreen: FC<ProfileScreenProps> = ({ route, navigation }) => {
	// From the previous screen
	const initialParams = route?.params;
	const { userName } = useUser();
	const [modalVisible, setModalVisible] = useState(false);

	// Context
	const { signOut } = useAuth();
	// Custom hooks

	// Internal state

	useEffect(() => {}, []);

	// Component JSX
	return (
		<SafeAreaView style={style.container} testID='ProfileScreen'>
			<ScrollView>
				<Title title='Profile' />
				<IconText
					bottom
					iconName='create-outline'
					style={style.editProfile}
					onPress={() => navigation?.navigate('EditProfileScreen')}
					iconColor={color.primary}
				/>
				<View style={style.userInfoSection}>
					<View style={style.userAvatarSection}>
						<Avatar />
					</View>
					<Text h4 bold title={userName} />
					<IconText
						iconName='location-outline'
						size={18}
						title='Brno, CZ'
						iconColor={color.primary}
					/>
					<IconText
						iconName='reader-outline'
						size={18}
						title='Som words for description'
						iconColor={color.primary}
					/>
				</View>
				<View style={style.infoBoxWrapper}>
					<View
						style={[
							style.infoBox,
							{
								borderRightColor: color.palette.lighterGrey,
								borderRightWidth: 1,
							},
						]}
					>
						<Text h3 bold title='Friends' />
						<Text h4 title='23' />
					</View>

					<View style={style.infoBox}>
						<Text h3 bold title='Stones' />
						<Text h4 title='23' />
					</View>
				</View>
				<View style={style.menuWrapper}>
					<IconText
						iconName='bookmark-outline'
						iconColor={color.secondary}
						title='Favorites'
					/>

					<IconText
						iconName='arrow-redo-outline'
						iconColor={color.secondary}
						title='Tell your friends'
					/>

					<IconText
						iconName='help-buoy-outline'
						iconColor={color.secondary}
						title='Support'
					/>

					<IconText
						iconName='settings-outline'
						iconColor={color.secondary}
						title='Settings'
					/>
					<IconText
						iconName='log-out-outline'
						iconColor={color.secondary}
						title='Logout'
						onPress={() => signOut()}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;
