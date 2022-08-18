import * as React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Screens/Login';
import Register from './src/components/Screens/Register';
import Add_Product from './src/components/Screens/Add_Product';
import Profile from './src/components/Screens/Profile';
import Edit_Personal_Data from './src/components/Screens/Edit_Personal_Data';
import Edit_Delivery_Data from './src/components/Screens/Edit_Delivery_Data';
import Edit_Password from './src/components/Screens/Edit_Password';
import Profile_Store from './src/components/Screens/Profile_Store';
import Edit_Product from './src/components/Screens/Edit_Product';

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
				<Stack.Screen name="Add_Product" component={Add_Product} />
				<Stack.Screen name="Edit_Product" component={Edit_Product} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Edit_Personal_Data" component={Edit_Personal_Data} />
				<Stack.Screen name="Edit_Delivery_Data" component={Edit_Delivery_Data} />
				<Stack.Screen name="Edit_Password" component={Edit_Password} />
				<Stack.Screen name="Profile_Store" component={Profile_Store} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default InitialLogin;