import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from 'src/navigation/MainNavigator';
import { ApolloProvider } from '@apollo/client';
import client from 'src/apollo/client';

import { AuthProvider } from 'src/context/authContext/authContext';
import { UserProvider } from 'src/context/userContext.tsx/userContext';
import { StoneProvider } from 'src/context/stoneContext/stoneContext';
import { PermissionsProvider } from 'src/context/permissionsContext/premissionsProvider';
import { CommentProvider } from 'src/context/commentProvider.tsx/commentContext';

const App = () => {
	return (
		<PermissionsProvider>
			<ApolloProvider client={client}>
				<UserProvider>
					<AuthProvider>
						<NavigationContainer>
							{/* <StoneProvider> */}
							<MainNavigator />
							{/* </StoneProvider> */}
						</NavigationContainer>
					</AuthProvider>
				</UserProvider>
			</ApolloProvider>
		</PermissionsProvider>
	);
};

export default App;
