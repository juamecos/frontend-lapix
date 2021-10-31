import React, { createContext, useReducer } from 'react';
import { useAuth } from '../authContext/authContext';
import { removeToken } from '../../utils/tokens';

export interface UserState {
	id: string;
	userName: string;
	email: string;
	avatar: string;
	registerDate: string;
	active: boolean;
	role: string;
}

export const initialState: UserState = {
	id: '',
	userName: '',
	email: '',
	avatar: '',
	registerDate: '',
	active: false,
	role: '',
};

export enum ActionType {
	setUser = 'SET_USER',
	removeUser = 'REMOVE_USER',
}

export interface SetUser {
	type: ActionType.setUser;
	payload: UserState;
}

export interface RemoveUser {
	type: ActionType.removeUser;
}

type UserAction = SetUser | RemoveUser;

interface UserContextActions {
	setUser: <T>(user: UserState) => Promise<void>;
	// updateUser: (data: UserPayload) => void;
	removeUser: () => void;
}

interface UserContextType extends UserState, UserContextActions {}

const UserContext = createContext<UserContextType>({
	id: '',
	userName: '',
	email: '',
	avatar: '',
	registerDate: '',
	active: false,
	role: '',
	setUser: async () => {},
	// updateUser: (data: UserPayload) => void;
	removeUser: () => {},
});

export const UserRef = React.createRef<UserContextActions>();

export const useUser = (): UserContextType => {
	const context = React.useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be inside an UserProvider with a value');
	}
	return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(UserReducer, initialState);
	const { token, status } = useAuth();

	const userActions: UserContextActions = {
		setUser: async (user: UserState) => {
			dispatch({ type: 'SET_USER', payload: user });
		},
		removeUser: async () => {
			await removeToken();
			dispatch({ type: 'REMOVE_USER' });
		},
	};
	return (
		<UserContext.Provider value={{ ...state, ...userActions }}>
			{children}
		</UserContext.Provider>
	);
};

export const UserReducer = (prevState: UserState, action: UserAction) => {
	switch (action.type) {
		case 'SET_USER':
			console.log(action.payload);

			return {
				...prevState,
				...action.payload,
			};
		case 'REMOVE_USER':
			return initialState;

		default:
			return prevState;
	}
};
