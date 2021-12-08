import reactotron from 'reactotron-react-native';
import { StoneAction, StoneState } from './stoneContextTypes';

export const StoneReducer = (prevState: StoneState, action: StoneAction) => {
	switch (action.type) {
		case 'SET_STEP':
			return {
				...prevState,
				step: action.step,
			};
		case 'SET_IMAGE':
			return {
				...prevState,
				image: action.image,
			};
		case 'SET_LOCATION':
			return {
				...prevState,
				location: action.location,
			};
		case 'SET_INFO':
			return {
				...prevState,
				title: action.info.title,
				description: action.info.description,
			};
		default:
			return prevState;
	}
};
