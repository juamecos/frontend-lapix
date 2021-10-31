import { StyleSheet } from 'react-native';
import { color } from 'src/theme';
import { constants } from 'src/theme/constants';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {
		backgroundColor: color.palette.offWhite,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: constants.STEP_CONTAINER_VERTICAL_PADDING, // This is 'constant' but is calculated with the vertical dots
	},
	wrapper: {
		position: 'relative',
	},
	text: {
		paddingVertical: spacing.vertical.micro,
		paddingHorizontal: spacing.horizontal.small,
		textAlign: 'center',
		paddingBottom: spacing.vertical.nano,
	},
});
