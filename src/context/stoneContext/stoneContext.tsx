import {
	StoneState,
	StoneContextType,
	StoneContextActions,
	ILocation,
	IInfo,
} from './stoneContextTypes';
import React, { createContext, useReducer } from 'react';

import { ImagePickerResponse } from 'react-native-image-picker';
import { StoneReducer } from './stoneReducer';

const initialState: StoneState = {
	step: 0,
	image: {
		didCancel: false,
		errorCode: 'camera_unavailable',
		errorMessage: '',
		assets: [],
	},
	location: {
		latitude: 0,
		longitude: 0,
	},
	title: '',
	description: '',
};

const StoneContext = createContext<StoneContextType>({
	step: 0,
	image: {
		didCancel: false,
		errorCode: 'camera_unavailable',
		errorMessage: '',
		assets: [],
	},
	location: {
		latitude: 0,
		longitude: 0,
	},
	title: '',
	description: '',
	setStep: () => {},
	setImage: () => {},
	setLocation: () => {},
	setInfo: () => {},
});

export const StoneRef = React.createRef<StoneContextActions>();

export const useStone = (): StoneContextType => {
	const context = React.useContext(StoneContext);
	if (!context) {
		throw new Error('useAuth must be inside an AuthProvider with a value');
	}
	return context;
};

export const StoneProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(StoneReducer, initialState);
	// React.useEffect(() => {
	// 	const initState = async () => {
	// 		try {
	// 			// dispatch({ type: 'CHECKING_AUTH' });
	// 			// reactotron.log('AuthProvider; Checking auth initial state');
	// 			// const userToken = await getData('token');
	// 			// reactotron.log(userToken);
	// 			// if (userToken) {
	// 			// 	reactotron.log('AuthProvider: Hay user token en AuthProvider');
	// 			// 	authActions.signIn(userToken);
	// 			// } else {
	// 			// 	reactotron.log('No hay user token en AuthProvider');
	// 			// 	authActions.signOut();
	// 			// }
	// 		} catch (e) {
	// 			// catch error here
	// 			// reactotron.log(`Error: ${e}`);
	// 			// authActions.signOut();
	// 		}
	// 	};
	// 	initState();
	// }, []);

	React.useImperativeHandle(StoneRef, () => stoneActions);

	const stoneActions: StoneContextActions = {
		setStep: (step: number) => {
			dispatch({ type: 'SET_STEP', step });
		},
		setImage: (image: ImagePickerResponse) => {
			dispatch({ type: 'SET_IMAGE', image });
		},
		setLocation: (location: ILocation) => {
			dispatch({ type: 'SET_LOCATION', location });
		},
		setInfo: (info: IInfo) => {
			dispatch({ type: 'SET_INFO', info });
		},
	};

	return (
		<StoneContext.Provider value={{ ...state, ...stoneActions }}>
			{children}
		</StoneContext.Provider>
	);
};
