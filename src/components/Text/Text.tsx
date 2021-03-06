/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text as RNText } from 'react-native';
import styles from './TextStyle';
import { Props } from './TextProps';
import { color } from 'src/theme';

/**
 *
 *
 * @param {*} {
 * 	h1,
 * 	h2,
 * 	h3,
 * 	h4,
 * 	h5,
 * 	p,
 * 	bold,
 * 	italic,
 * 	title,
 * 	textColor = color.text,
 * textShadow,
 * 	style,
 * 	...rest
 * }
 * @return {*}
 */
const Text: React.FC<Props> = ({
	h1,
	h2,
	h3,
	h4,
	h5,
	p,
	bold,
	italic,
	title,
	textColor = color.text,
	textShadow,
	style,
	...rest
}) => {
	return (
		<RNText
			testID='text-component'
			style={[
				styles.text,
				h1 && { fontSize: 26 },
				h2 && { fontSize: 22 },
				h3 && { fontSize: 18 },
				h4 && { fontSize: 16 },
				h5 && { fontSize: 12 },
				p && { fontSize: 15 },
				bold && { fontWeight: 'bold' },
				italic && { fontStyle: 'italic' },
				style,
				{ color: textColor },
				textShadow && {
					textShadowColor: 'rgba(0, 0, 0, 0.75)',
					textShadowOffset: { width: -1, height: 1 },
					textShadowRadius: 10,
				},
			]}
			{...rest}
		>
			{title}
		</RNText>
	);
};

export default Text;
