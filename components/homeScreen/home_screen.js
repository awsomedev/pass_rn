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
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppBar } from "@react-native-material/core";
import LinearGradient from 'react-native-linear-gradient';
import API from '../../api/api';
import Tile from '../taskTile';



const HomeScreen = ({navigation}) => {

    let [pageLoading, setPageLoading] = useState(true)
    let [data, setData] = useState()

    const Loader = () => {
        return (         
        <View style={styles.container}>
            {/* <AppBar
                title="Meet Pass"
                titleStyle={styles.title}
                centerTitle={true}
                style={{
                    paddingTop: inset.top
                }}
                transparent={true}/> */}
            <View style={{flex:1,justifyContent:"center"}}>
                <ActivityIndicator size="large" color="grey"></ActivityIndicator>
            </View>
        </View>)
    }

    const CreatedByMe = (props)=>{
        return (
            <View style={styles.createdByMe}>
                    <Text style={{ color: "white", fontSize: 19, fontWeight: "600" }}>Business Meeting</Text>
                    <Text style={{ color: "white", fontSize: 14, fontWeight: "300" }}>Genesis Advertising</Text>
                    <Text style={{ color: "white", fontSize: 12, fontWeight: "300" }}>11-06-2020</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "300" }}>09:00AM - 10:00AM</Text>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "300" }}>Corniche</Text>
                    </View>
             </View>
        )
    }


    async function getData() {
        setPageLoading(true)
        let res = await API.homeApi()
        setPageLoading(false)
        setData(res)
    }

    useEffect(() => {
        getData()
    }, [])

    const inset = useSafeAreaInsets()
    return (
        pageLoading == true ? 
            <Loader/>:
            <View style={styles.container}>
                <ScrollView>
                    <Image source={{uri: data?.home_slider?.image}}  style={{height: 180, borderRadius: 15, marginHorizontal: 20,marginBottom:20}} />
                    <View>
                        <TouchableNativeFeedback onPress={()=> navigation.navigate("MyPassPage")}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10 }}>
                                <Text style={styles.title}>My Meeting</Text>
                                <Text style={styles.smallText}>See all</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <FlatList
                    data={data?.ML}
                    renderItem = {({item})=>(<Tile data={item} style= {styles.myMeeting} />)}
                    keyExtractor={item => item.meetings_id}
                    numColumns= {1}
                    horizontal= {true}
                    ListHeaderComponent= {<View style ={{width:20}}/>}
                    ListFooterComponent= {<View style ={{width:20}}/>}
                    ItemSeparatorComponent = {({item,index})=> (<View style ={{width:10}}/>)}
                    style={{marginBottom: 20}}
                    />
                    <View style={[styles.createMeeting, { justifyContent: "center", alignItems: "center" }]}>
                        <Text style={styles.title}>Create Meeting</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10 }}>
                            <Text style={styles.title}>Created bt me</Text>
                            <Text style={styles.smallText}>See all</Text>
                        </View>
                    </View>
                    <FlatList
                    data={data?.MeetingCreatedByMe}
                    renderItem = {({item})=>(<CreatedByMe data={item} />)}
                    keyExtractor={item => item.meetings_id}
                    numColumns= {1}
                    horizontal= {true}
                    ListHeaderComponent= {<View style ={{width:20}}/>}
                    ListFooterComponent= {<View style ={{width:20}}/>}
                    ItemSeparatorComponent = {({item,index})=> (<View style ={{width:10}}/>)}
                    />
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10, marginTop: 10 }}>
                            <Text style={styles.title}>Day-to-Day</Text>
                            <Text style={styles.smallText}>See all</Text>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#212253",
        flex: 1,
    },
    title: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    smallText: {
        color: "white",
        fontWeight: "300",
        fontSize: 14,
    },
    createMeeting: {
        height: 60,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: "#E6606C"
    },
    createdByMe: {
        borderRadius: 12,
        backgroundColor: "#4D4F95",
        padding: 15,
        width: Dimensions.get('window').width - 40,
    },
    myMeeting:{
        backgroundColor: "#4D4F95",
        borderRadius: 12,
        padding: 15,
        width: Dimensions.get('window').width - 40,
    }

})

export default HomeScreen