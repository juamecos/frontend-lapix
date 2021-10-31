import { gql, InMemoryCache, makeVar } from '@apollo/client';

interface IAuth {
	isAuthenticated: boolean;
	id?: string;
}

const initialValue: IAuth = {
	isAuthenticated: false,
	id: undefined,
};

export const GET_AUTH = gql`
	query Auth {
		auth @client {
			id
		}
	}
`;

export const authVar = makeVar<IAuth>(initialValue);

const cache = new InMemoryCache({
	addTypename: false,
});

authVar({
	isAuthenticated: true,
	id: '1',
});

console.log(authVar());
authVar({
	isAuthenticated: false,
	id: undefined,
});

console.log(authVar());

export default cache;