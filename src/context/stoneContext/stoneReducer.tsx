import reactotron from 'reactotron-react-native';
import { StoneAction, StoneState } from './stoneContextTypes';

export const StoneReducer = (prevState: StoneState, action: StoneAction) => {
	switch (action.type) {
		case 'SET_STEP':
			reactotron.log('UPDATE_STEP Stone reducer: ', action.step);
			reactotron.log(action.step);

			return {
				...prevState,
				step: action.step,
			};
		case 'SET_IMAGE':
			reactotron.log('SET_IMAGE');
			return {
				...prevState,
				image: action.image,
			};
		case 'SET_LOCATION':
			reactotron.log('SET_LOCATION');
			return {
				...prevState,
				location: action.location,
			};
		case 'SET_INFO':
			reactotron.log('SET_INFO');
			return {
				...prevState,
				title: action.info.title,
				description: action.info.description,
			};
		default:
			return prevState;
	}
};
