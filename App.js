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

const App = () => {
  return (
   <MyPassPage/>
  );
};


const SafeArea = ()=>{
  return (
  <SafeAreaProvider>
    <App/>
  </SafeAreaProvider>
)}
export default SafeArea;

