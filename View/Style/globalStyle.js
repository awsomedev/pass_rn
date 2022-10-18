import React from 'react';
import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const globalStyle = StyleSheet.create({
    background: {
        backgroundColor: "#212253",
        flex: 1,
    },
    button:{
        backgroundColor:"#6357F6",
        height:50,
        width:Dimensions.get('window').width - 40,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontSize:16,
        fontWeight:"500",
    }
})

export default globalStyle