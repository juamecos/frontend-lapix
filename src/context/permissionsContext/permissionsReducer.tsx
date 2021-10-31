import reactotron from 'reactotron-react-native';
import {
	PermissionsActions,
	PermissionsState,
} from './permissionsContextTypes';

export const PermissionsReducer = (
	prevState: PermissionsState,
	action: PermissionsActions
) => {
	switch (action.type) {
		case 'ASK_LOCATION_PERMISSION':
			reactotron.log('ASK_LOCATION_PERMISSION', action);
			return {
				...prevState,
				locationStatus: action.permissionStatus,
			};

		case 'CHECK_LOCATION_PERMISSION':
			reactotron.log('CHECK_LOCATION_PERMISSION', action);
			return {
				...prevState,
				locationStatus: action.permissionStatus,
			};

		default:
			return prevState;
	}
};
