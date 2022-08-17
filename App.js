import * as React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Screens/Login';
import Register from './src/components/Screens/Register';
import Home from './src/components/Screens/Home';
import Profile from './src/components/Screens/Profile';
import Edit_Personal_Data from './src/components/Screens/Edit_Personal_Data';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 0, 0)',
    background:'white'
  },
};

const Stack = createNativeStackNavigator();

const InitialLogin = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator  screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={Login} options={{ title: 'Welcome' }}/>
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Edit_Personal_Data" component={Edit_Personal_Data} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default InitialLogin;