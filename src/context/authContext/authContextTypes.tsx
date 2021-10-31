export interface AuthState {
	status: 'Authenticated' | 'Unauthenticated' | 'Checking';
	token: string | undefined | null;
}

export type AuthAction =
	| { type: 'SIGN_IN'; token: string | undefined | null }
	| { type: 'SIGN_OUT' }
	| { type: 'CHECKING_AUTH' };

export type AuthPayload = string;

export interface AuthContextActions {
	signIn: (data: AuthPayload) => void;
	signOut: () => void;
	checkingAuth: () => void;
}

export interface AuthContextType extends AuthState, AuthContextActions {}
