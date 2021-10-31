import React, { createContext } from 'react';
import {
	PermissionsContextActions,
	PermissionsContextType,
	PermissionsState,
} from './permissionsContextTypes';

export const PermissionsInitState: PermissionsState = {
	locationStatus: 'unavailable',
};

export const PermissionsContext = createContext<PermissionsContextType>({
	locationStatus: 'unavailable',
	askLocationPermission: () => {},
	checkLocationPermission: () => {},
});

export const PermissionsRef = React.createRef<PermissionsContextActions>();

export const usePermissions = (): PermissionsContextType => {
	const context = React.useContext(PermissionsContext);
	if (!context) {
		throw new Error(
			'usePermissions must be inside an PermissionsProvider with a value'
		);
	}
	return context;
};
