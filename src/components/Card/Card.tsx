import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import styles from './CardStyle';
import Text from 'src/components/Text';
import Avatar from '../Avatar';
import IconText from '../IconText';
import { timeSince } from 'src/utils/time';
import { IStone } from 'src/interfaces/IStone';

export type Props = {
	data: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: React.FC<Props> = ({ data }) => {
	return (
		<View testID='Card' style={styles.card}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerRight}>
						<View style={styles.avatar}>
							<Avatar
								avatar={data.user.avatar ? data.user.avatar : ''}
								radius={40}
							/>
						</View>
						<View style={styles.group}>
							<View style={styles.userName}>
								<Text h4 bold title={data.user.userName} />
							</View>
							<View style={styles.published}>
								<Text h5 title={timeSince(data.registerDate)} />
							</View>
						</View>
					</View>

					<View style={styles.headerLeft}>
						<View style={styles.menu}>
							<IconText
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
							<IconText bottom iconName='eye-outline' title='views' />
						</View>
					</View>
					<View style={styles.space} />
					<View style={styles.footerRight}>
						<View style={styles.likes}>
							<IconText bottom iconName='heart-outline' title='likes' />
						</View>
						<View style={styles.comments}>
							<IconText bottom iconName='chatbubble-outline' title='comments' />
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Card;
