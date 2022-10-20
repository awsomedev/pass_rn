import React from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-ionicons'


const CustomAppBar = (props) => {
    const insect = useSafeAreaInsets()
    return (
        <View style={{
            height: 50+insect.top, 
            width: Dimensions.get("window").width, 
            paddingTop:insect.top,
            backgroundColor:"transparent",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <Text style={{color:"white",fontWeight:"600",fontSize:25,marginBottom:2}}>{props.title??"Meet Pass"}</Text>
            <TouchableNativeFeedback onPress={props.leftPress}>
                <Icon 
                name={props.leftButton??'arrow-back'} 
                color='white' 
                size={30} 
                style={{position:"absolute",left:20,top:10+insect.top}}>
                </Icon>
            </TouchableNativeFeedback>
        </View>
    )
}

export default CustomAppBar