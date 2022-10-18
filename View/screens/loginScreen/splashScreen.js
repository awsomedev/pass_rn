import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
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
    Image,
    TouchableNativeFeedback,
    TextInput,
    Alert,
} from 'react-native';
import AppButton from '../../components/button';

import globalStyle from '../../Style/globalStyle';
import API from '../../../api/api';
import Spinner from 'react-native-loading-spinner-overlay';
import storage from '../../components/storage';
import AppUtils from '../../components/utils';


const SplashScreen = (props) => {
    const navigation = useNavigation()

    const getData = async () => {
        var uid = await AppUtils.getUserId()
        setTimeout(() => {
          if(uid){
            navigation.replace('HomeStack')
            return
          }
          navigation.replace('LoginScreen')
        }, 2000)
      }

    useEffect(() => {
        navigation.setOptions({
            header:()=>(null)
        })
        getData()
    }, [])

    return (
        <View style={[globalStyle.background, { justifyContent: "center", alignItems: "center" }]}>
            <Image source={require("../../../assets/mpass.png")} />
        </View>
    )
}


export default SplashScreen;
