import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, ImageBackground, Image, ScrollView } from 'react-native';
import ImageColors from 'react-native-image-colors';
import styles from './SingleStoneStyle';
import { useStoneLazyQuery, useStoneQuery } from '../../generated/graphql';
import Loader from '../Loader';
import { IStone } from 'src/interfaces/IStone';
import Avatar from '../Avatar';
import Text from 'src/components/Text';
import { timeAgo } from 'src/utils/time';
import { color } from 'src/theme';

export type Props = {
	data: IStone;
};

const SingleStone: React.FC<Props> = ({ data }) => {
	useLayoutEffect(() => {}, []);
	const publishedAgo = timeAgo(data.registerDate);
	return (
		<ScrollView
			testID='SingleStone'
			style={styles.container}
			persistentScrollbar={false}
		>
			<ImageBackground
				source={{ uri: data.image }}
				resizeMode='contain'
				style={[styles.image]}
			>
				<View style={styles.userInfo}>
					<View style={styles.avatar}>
						<Avatar
							avatar={data.user.avatar ? data.user.avatar : ''}
							radius={50}
						/>
					</View>
					<View style={styles.info}>
						<View>
							<Text
								h2
								textShadow
								textColor={color.textWhite}
								bold
								title={data.user.userName}
							/>
						</View>
						<View>
							<Text
								h4
								textShadow
								textColor={color.textWhite}
								title={publishedAgo}
							/>
						</View>
					</View>
				</View>
				<Text
					h4
					bold
					textColor={color.textWhite}
					title={'Hola'}
					// title={data.title}
					// style={!data.title && { height: 0 }}
				/>
				<Text
					h4
					textColor={color.textWhite}
					title={'Hola esta es la descripción'}
					// title={data.description}
					// style={!data.description && { height: 0 }}
				/>
			</ImageBackground>
		</ScrollView>
	);
};

export default SingleStone;
