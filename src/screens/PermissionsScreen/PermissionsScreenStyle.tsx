import { StyleSheet } from 'react-native';
import { color } from 'src/theme';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.palette.white,
	},
	title: {
		paddingBottom: spacing.vertical.tiny,
		width: spacing.horizontal.huge,
		textAlign: 'center',
	},
});
