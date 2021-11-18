import React, { Dispatch, SetStateAction } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './CardStyle';
import Text from 'src/components/Text';
import Avatar from '../Avatar';
import IconText from '../IconText';
import { timeSince } from 'src/utils/time';
import { timeAgo } from '../../utils/time';
import { IStone } from 'src/interfaces/IStone';

export type Props = {
	data: IStone;
	handleOnSelected: (id: number) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: React.FC<Props> = ({ data, handleOnSelected }) => {
	return (
		<TouchableOpacity
			testID='Card'
			style={styles.card}
			onPress={() => handleOnSelected(data.id)}
		>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerRight}>
						<View style={styles.avatar}>
							<Avatar
								avatar={data.user.avatar ? data.user.avatar : ''}
								radius={40}
							/>
						</View>
						<View style={styles.info}>
							<View style={styles.userName}>
								<Text h4 bold title={data.user.userName} />
							</View>
							<View style={styles.published}>
								<Text h5 title={timeAgo(data.registerDate)} />
							</View>
						</View>
					</View>

					<View style={styles.headerLeft}>
						<View style={styles.menu}>
							<IconText
								h5
								bottom
								iconName='ellipsis-horizontal-outline'
								title='more'
							/>
						</View>
					</View>
				</View>
				<View style={styles.body}>
					<ImageBackground
						source={{
							uri: data.image
								? data.image
								: 'https://picsum.photos/id/237/200/300',
						}}
						resizeMode='cover'
						style={styles.image}
					/>
				</View>
				<View style={styles.footer}>
					<View style={styles.footerLeft}>
						<View style={styles.views}>
							<IconText
								h5
								// badge
								// badgeData={5}
								iconName='eye-outline'
								title='views'
								textStyle={styles.textIconStyle}
							/>
						</View>
					</View>
					<View style={styles.space} />
					<View style={styles.footerRight}>
						<View style={styles.likes}>
							<IconText
								h5
								iconName='heart-outline'
								title='likes'
								textStyle={styles.textIconStyle}
							/>
						</View>
						<View style={styles.comments}>
							<IconText
								h5
								iconName='chatbubble-outline'
								title='comments'
								textStyle={styles.textIconStyle}
							/>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
