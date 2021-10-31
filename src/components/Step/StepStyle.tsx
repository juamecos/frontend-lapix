import { StyleSheet } from 'react-native';
import { color } from 'src/theme';
import { constants } from 'src/theme/constants';

export default StyleSheet.create({
	stepBlock: {},
	circleWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		backgroundColor: color.palette.green,
		color: 'white',
		width: constants.STEP_CIRCLE_RADIUS,
		height: constants.STEP_CIRCLE_RADIUS,
		borderRadius: 999,
		borderWidth: 2,
		borderColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	stepNumber: {
		fontSize: 20,
		color: color.textWhite,
	},
	currentStep: {
		backgroundColor: 'white',
		borderColor: color.palette.green,
	},
	currentStepNumber: {
		color: color.palette.green,
	},
	stepLabel: {
		fontSize: 13,
		color: color.palette.greenLighter,
	},
	currentStepLabel: {
		color: color.palette.green,
	},
});
