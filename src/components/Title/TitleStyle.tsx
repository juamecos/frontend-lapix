import { StyleSheet } from 'react-native';
import { spacing } from 'src/theme';

import { color } from 'src/theme/color';
export default StyleSheet.create({
	titleWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: spacing.hp('2.8%'),
		paddingVertical: spacing.hp('2.8%'),
		fontWeight: '500',
		color: color.primary,
	},
});
