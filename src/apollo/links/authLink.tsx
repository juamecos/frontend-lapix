import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from 'src/context/authContext/authContext';
import { getToken } from '../../utils/tokens';

export const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from Async Storage if it exists

	const token = await getToken();
	console.log('From authLink token', token);

	return {
		headers: {
			...headers,
			Authorization: token ? token : null,
		},
	};
});
