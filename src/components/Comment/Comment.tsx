import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IComment } from 'src/interfaces/IComment';
import Text from '../Text';
import styles from './CommentStyle';

export type Props = {
	comment: IComment;
	onPress: () => void;
};

const Comment: React.FC<Props> = ({ comment, onPress }) => {
	return (
		<View testID='Comment'>
			<TouchableOpacity style={[styles.card]} onPress={onPress}>
				<Text h4 title={comment} />
			</TouchableOpacity>
		</View>
	);
};

export default Comment;
