import React, { useState } from 'react';
import { View } from 'react-native';
import { useCountCommentsQuery } from 'src/generated/graphql';
import { useComments } from 'src/hooks/useComments';
import { IStone } from 'src/interfaces/IStone';
import IconText from '../IconText';
import styles from './CommentIconStyle';

export type Props = {
	data: IStone;
};

const CommentIcon: React.FC<Props> = ({ data }) => {
	const { countComments } = useComments(data);

	return (
		<View testID='CommentIcon' style={styles.comments}>
			<IconText
				h5
				badge={countComments ? true : false}
				badgeData={countComments ? countComments : null}
				iconName='chatbubble-outline'
				title='comments'
				textStyle={styles.textIconStyle}
			/>
		</View>
	);
};

export default CommentIcon;
