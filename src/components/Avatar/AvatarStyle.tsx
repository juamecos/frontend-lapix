import { StyleSheet } from 'react-native';
import { color, spacing } from 'src/theme';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: spacing.wp(25),
		width: spacing.wp(25),
		borderColor: color.primary,
		borderRadius: 100,
		borderWidth: 2,
		marginVertical: spacing.vertical.nano,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	image: {
		height: spacing.wp(24),
		width: spacing.wp(24),
	},
});
