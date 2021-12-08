import React from 'react';
import { View } from 'react-native';
import { IComment } from 'src/interfaces/IComment';
import IconText from '../IconText';
import styles from './CommentIconStyle';

export type Props = {
	data: IComment[] | [];
	onHandleCommentPress: () => void;
};

const CommentIcon: React.FC<Props> = ({ data, onHandleCommentPress }) => {
	return (
		<View testID='CommentIcon' style={styles.comments}>
			<IconText
				h5
				badge={data.length > 0 ? true : false}
				badgeData={data.length ? data.length : null}
				iconName='chatbubble-outline'
				title='comments'
				textStyle={styles.textIconStyle}
				onPress={onHandleCommentPress}
			/>
		</View>
	);
};

export default CommentIcon;
