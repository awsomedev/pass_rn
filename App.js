import React from 'react';
import type { Node } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import MyPassPage from './components/mypass';
import HomeScreen from './components/homeScreen/home_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const MyStack = () => {

  const getTitle = (title)=>{
    return ({
      headerTitle :title, 
      headerTitleStyle: {color:"white",fontWeight:"600",fontSize:18},
      headerBackground:()=>(<View style={{backgroundColor:"#212253",flex:1}}></View>),
      headerBackTitle: ""
    })
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={getTitle("MEET PASS")} />
        <Stack.Screen
          name="MyPassPage"
          component={MyPassPage}
          options={getTitle("MY PASS")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
   <MyStack/>
  );
};


const SafeArea = ()=>{
  return (
    <SafeAreaProvider>
      <App/>
    </SafeAreaProvider>
)}
export default SafeArea;

