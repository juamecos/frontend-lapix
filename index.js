if (__DEV__) {
	import('src/config/ReactoronConfig').then(() =>
		console.log('Reactotron Configured')
	);
}
import Reactotron from 'reactotron-react-native';

import { AppRegistry } from 'react-native';
import App from './src/App/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
