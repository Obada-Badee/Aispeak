import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Registration';
import WelcomeScreen from '../screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = ({ users, setUsers }) => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: 'black',
        headerTitle:'',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} users={users} setUsers={setUsers} />}
      </Stack.Screen>

      <Stack.Screen name="Register">
        {(props) => <RegisterScreen {...props} users={users} setUsers={setUsers} />}
      </Stack.Screen>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;