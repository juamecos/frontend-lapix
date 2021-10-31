import { StyleSheet } from 'react-native';
import { color, spacing } from 'src/theme';
import { constants } from 'src/theme/constants';

export default StyleSheet.create({
	progressBar: {
		width: '80%',
		height: 3,
		backgroundColor: color.palette.greenLighter,
		position: 'absolute',
		top:
			constants.STEP_CIRCLE_RADIUS / 2 +
			constants.LABEL_FONT_SIZE -
			constants.STEP_CONTAINER_VERTICAL_PADDING,
		left: '10%',
	},
	progressBarPosition: {
		height: 3,
		backgroundColor: color.palette.green,
	},
});
