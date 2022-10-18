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


const LoginScreen = (props) => {
    const navigation = useNavigation()
    let [mobileNumber,setNumber] = useState("")
    let [spin,setSpin] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerTitleStyle: { color: "white", fontWeight: "600", fontSize: 18 },
            headerBackground: () => (<View style={{ backgroundColor: "#212253", flex: 1 }}></View>),
            headerBackTitle: ""
        })
    }, [])

    const onClick = async()=>{
        if(!mobileNumber){
            Alert.alert('Error',"Please enter a valid number")
            return
        }
        if(mobileNumber.length < 8){
            Alert.alert('Error',"Please enter a valid number")
            return
        }
        setSpin(true)
        var data = await API.loginApi(mobileNumber,'1')
        setSpin(false)
        if(data?.status != '200'){
            Alert.alert('Error',"Login failed")
            return
        }
        await AppUtils.setUserId(data?.MD?.members_id)
        navigation.replace('HomeScreen')

    }

    return (
        <View style={[globalStyle.background, { justifyContent: "flex-start", alignItems: "center" }]}>
             <Spinner
                visible={spin}
                textContent={''}
                overlayColor={"rgba(0, 0, 0, 0.5)"}
                textStyle={{color: '#FFF'}}
            />
            <View style={{ height: "10%" }} />
            <Image source={require("../../../assets/mpass.png")} />
            <View style={{ height: "10%" }} />
            <View style={style.inputView}>
                <Text style={style.inputStyle}>Country</Text>
            </View>
            <View style={{height:"5%"}}/>
            <View style={style.inputView}>
                <TextInput 
                    placeholder='Mobile Number' 
                    placeholderTextColor={"white"} 
                    textAlign='center' 
                    style={style.inputStyle} 
                    keyboardType={"phone-pad"}
                    maxLength={8}
                    value={mobileNumber}
                    onChangeText={(val)=>{
                        setNumber(val)
                    }}
                />
            </View>
            <View style={{height:"30%"}}/>
            <AppButton onPress = {onClick} title = {"SIGN IN"}/>
        </View>
    )
}

const style = StyleSheet.create({
    inputStyle: {
        textAlign: "center",
        fontSize:15,
        color:"white"
    },
    inputView: {
        backgroundColor: 'transparent', 
        alignSelf: "stretch", 
        borderBottomColor: "#6357F6", 
        borderColor: "#6357F6", 
        borderBottomWidth: 2,
        marginHorizontal: 20,
        paddingBottom: 10,
    }
})

export default LoginScreen;
