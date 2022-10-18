import React from 'react';
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
    Image,
  } from 'react-native';

const Tile = (props)=>{
    return(
        <View style={props.style? props.style : styles.tileStyle}>
            <View style ={{flexDirection: "row"}}>
                <View style={styles.circle}>
                    <Image style={styles.circle} source = {{uri:props.data.image}}/>
                </View>
                <View style={{flex:1,marginLeft:10,flexDirection:"column",justifyContent:"center"}}>
                    <Text style={styles.titleStyle}>{props.data.meeting_title}</Text>
                    <Text style={styles.subtitleStyle}>{props.data.name}</Text>
                </View>
            </View>
            <View style = {{marginTop: 10}}>
                <Text style = {styles.smallText}>{props.data.date}</Text>
                <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style = {styles.smallText}>{props.data.time} - {props.data.end_time}</Text>
                    <Text numberOfLines={1} style = {[styles.smallText,{width:100,textAlign:"right"}]}>{props.data.location}</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    tileStyle:{
        backgroundColor: "#4D4F95",
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        marginHorizontal: 20,
      },
    circle:{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "white"
    },
    titleStyle:{
        fontWeight: "600",
        fontSize: 19,
        color: "white"
    },
    subtitleStyle:{
        fontWeight: "300",
        fontSize: 14,
        color: "white"
    },
    smallText:{
        fontWeight: "300",
        fontSize: 12,
        color: "white"
    }
})

export default Tile