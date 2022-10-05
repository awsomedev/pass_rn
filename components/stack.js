import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen
          name="MyPassPage"
          component={MyPassPage}
          options={{ title: 'Welcome' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};