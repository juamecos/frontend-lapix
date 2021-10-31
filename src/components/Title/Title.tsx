import React from 'react';
import { View, Text } from 'react-native';
import styles from './TitleStyle';
import { Props } from './TitleProps';

const Title: React.FC<Props> = ({ title, styleWrapper, styleText }) => {
	return (
		<View testID='Title' style={[styles.titleWrapper, styleWrapper]}>
			<Text style={[styles.title, styleText]}>{title}</Text>
		</View>
	);
};

export default Title;
