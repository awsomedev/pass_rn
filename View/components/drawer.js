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
} from 'react-native';

const Drawer = (props) => {
    if(!props.drawerShow){
        return null;
    }
    return (
       <TouchableNativeFeedback onPress={props.outsideClick}>
        <View style={{
                height: Dimensions.get("window").height, 
                width: Dimensions.get("window").width, 
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                position: "absolute", 
                top: 0,
                left: 0,
            }}>
        
        <TouchableNativeFeedback onPress={()=>{console.log("inside")}}>
            <View style={{
                height: Dimensions.get("window").height, 
                width: Dimensions.get("window").width/1.5, 
                backgroundColor: "#4D4F95",
                borderBottomRightRadius:20,
                borderTopRightRadius:20,
            }}></View>
        </TouchableNativeFeedback>
        </View>
        </TouchableNativeFeedback>
    )
}

export default Drawer