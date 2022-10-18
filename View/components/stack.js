import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/loginScreen/splashScreen';
import LoginScreen from '../screens/loginScreen/loginScreen';
import HomeScreen from '../screens/homeScreen/home_screen';
import MyPassPage from '../screens/mypass/mypass';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();



const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name='HomeStack' component={HomeStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = ()=>{
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="MyPassPage" component={MyPassPage}/>
    </Stack.Navigator>
  )
}



export default MyStack
