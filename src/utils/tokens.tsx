import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode, { JwtPayload } from 'jwt-decode';

export const decodeToken = token => {
	return jwt_decode(token);
};

const TOKEN_NAME = 'token';

export const getToken = async () => {
	try {
		const value = await AsyncStorage.getItem(TOKEN_NAME);
		if (value !== null) {
			console.log(`Got ${value}`);
			return value;
		}
		return null;
	} catch (e) {
		console.log(e);
	}
};

export const setToken = async (value: string) => {
	try {
		await AsyncStorage.setItem(TOKEN_NAME, value);
		console.log(`Stored ${TOKEN_NAME}: ${value}`);
	} catch (e) {
		console.log(e);
	}
};

export const removeToken = async () => {
	try {
		await AsyncStorage.removeItem(TOKEN_NAME);
		console.log(`Removed ${TOKEN_NAME}`);
	} catch (error) {}
};
