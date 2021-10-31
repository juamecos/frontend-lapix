import { PermissionStatus } from 'react-native-permissions';

export interface PermissionsState {
	locationStatus: PermissionStatus;
}

export type PermissionsActions =
	| { type: 'ASK_LOCATION_PERMISSION'; permissionStatus: PermissionStatus }
	| { type: 'CHECK_LOCATION_PERMISSION'; permissionStatus: PermissionStatus }; // if payload | { type: 'ACTION_TYPE', token: string | undefined  };

export type PermissionsPayload = string;

export interface PermissionsContextActions {
	askLocationPermission: () => void;
	checkLocationPermission: () => void;
}

export interface PermissionsContextType
	extends PermissionsState,
		PermissionsContextActions {}
