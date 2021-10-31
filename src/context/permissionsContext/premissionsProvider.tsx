/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from 'react';
import { PermissionsReducer } from './permissionsReducer';
import { PermissionsContext, PermissionsInitState } from './permissionsContext';
import { PermissionsContextActions } from './permissionsContextTypes';
import {
	check,
	PERMISSIONS,
	PermissionStatus,
	request,
	openSettings,
} from 'react-native-permissions';
import { AppState, AppStateStatus, Platform } from 'react-native';

export const PermissionsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(
		PermissionsReducer,
		PermissionsInitState
	);

	const handleCheckLocationPermission = (stateApp: AppStateStatus) => {
		if (stateApp !== 'active') return;

		permissionsActions.checkLocationPermission();
	};

	React.useEffect(() => {
		permissionsActions.checkLocationPermission();
		AppState.addEventListener('change', handleCheckLocationPermission);
		return () => {
			AppState.removeEventListener('change', handleCheckLocationPermission);
		};
	}, []);

	const permissionsActions: PermissionsContextActions = {
		askLocationPermission: async () => {
			let permissionStatus: PermissionStatus;
			if (Platform.OS === 'ios') {
				permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
			} else {
				permissionStatus = await request(
					PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
				);
			}
			if (permissionStatus === 'blocked') {
				openSettings();
			}
			console.log('ASK_LOCATION_PERMISSION', permissionStatus);

			dispatch({ type: 'ASK_LOCATION_PERMISSION', permissionStatus });
		},
		checkLocationPermission: async () => {
			let permissionStatus: PermissionStatus;
			if (Platform.OS === 'ios') {
				permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
			} else {
				permissionStatus = await check(
					PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
				);
			}
			console.log('CHECK_LOCATION_PERMISSION', permissionStatus);

			dispatch({ type: 'CHECK_LOCATION_PERMISSION', permissionStatus });
		},
	};
	return (
		<PermissionsContext.Provider value={{ ...state, ...permissionsActions }}>
			{children}
		</PermissionsContext.Provider>
	);
};
