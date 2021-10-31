import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			console.log(`Got ${key}: ${value}`);
			return value;
		}
		return null;
	} catch (e) {
		console.log(e);
	}
};

export const storeData = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
		console.log(`Stored ${key}: ${value}`);
	} catch (e) {
		console.log(e);
	}
};

export const removeData = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key);
		console.log(`Removed ${key}`);
	} catch (error) {}
};
