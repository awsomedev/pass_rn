import React, { useEffect, useState } from 'react';
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
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import MyPassPage from './View/screens/mypass/mypass';
import HomeScreen from './View/screens/homeScreen/home_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './View/screens/loginScreen/loginScreen'
import storage from './View/components/storage';
import AppUtils from './View/components/utils';
import globalStyle from './View/Style/globalStyle';
import MyStack from './View/components/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


const HomeComponent = () => {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen
          name="MyPassPage"
          component={MyPassPage}
        />
      </HomeStack.Navigator>
  )
}

// const MyStack = () => {
//   let [loading, setLoading] = useState(true)
//   let [userId, setUserId] = useState('')

//   const getData = async () => {
//     var uid = await AppUtils.getUserId()
//     setTimeout(() => {
//       setLoading(false)
//       if(uid){
//         setUserId(uid)
//       }
//     }, 2000)
//   }

//   useEffect(() => {
//     getData()
//   }, [])
//   if(loading){
//     return (<View style={globalStyle.background}></View>)
//   }
//   return (
//     <NavigationContainer>
//       {
//         userId?(
//         <Stack.Navigator>
//           <Stack.Screen name="HomeComponent" component={HomeComponent} options={{title:"Home Screen"}} />
//         </Stack.Navigator>
//         )
//         :
//         (
//         <Stack.Navigator>
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="HomeComponent" component={HomeComponent} />
//         </Stack.Navigator>
//       )
//       }
//     </NavigationContainer >
  
//   );
// };
const App = () => {
  return (
    <MyStack />
  );
};


const SafeArea = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
    </GestureHandlerRootView>

  )
}
export default SafeArea;


