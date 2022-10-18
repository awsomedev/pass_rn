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
import API from '../../../api/api';
import Tile from '../../components/taskTile';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons'




const HomeScreen = () => {

    let [pageLoading, setPageLoading] = useState(true)
    let [data, setData] = useState()
    const navigation = useNavigation()

    const Loader = () => {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="grey"></ActivityIndicator>
                </View>
            </View>)
    }

    const DayTodayCount = (props) => {
        return (
            <View style={styles.dayToDayNumber}>
                <Text style={[styles.title, { marginRight: 5 }]}>{props.left}</Text>
                <View style={{ height: 30, width: 2, backgroundColor: "white" }}></View>
                <Text style={[styles.title, { marginLeft: 5 }]}>{props.right}</Text>
            </View>
        )
    }
    const CreatedByMe = (props) => {
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
            <Loader /> :
            <View style={[styles.container,{position:"relative"}]}>
                <CustomAppBar/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={{ uri: data?.home_slider?.image }} style={{ height: 180, borderRadius: 15, marginHorizontal: 20, marginBottom: 20 }} />
                    <View>
                        <TouchableNativeFeedback onPress={() => navigation.navigate("MyPassPage")}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10 }}>
                                <Text style={styles.title}>My Meeting</Text>
                                <Text style={styles.smallText}>See all</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <FlatList
                        data={data?.ML}
                        renderItem={({ item }) => (<Tile data={item} style={styles.myMeeting} />)}
                        keyExtractor={item => item.meetings_id}
                        numColumns={1}
                        horizontal={true}
                        ListHeaderComponent={<View style={{ width: 20 }} />}
                        ListFooterComponent={<View style={{ width: 20 }} />}
                        ItemSeparatorComponent={({ item, index }) => (<View style={{ width: 10 }} />)}
                        style={{ marginBottom: 20 }}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={[styles.createMeeting, { justifyContent: "center", alignItems: "center" }]}>
                        <Text style={styles.title}>Create Meeting</Text>
                    </View>
                    {
                        data?.MeetingCreatedByMe.length == 0 ?
                            (<View></View>) :
                            (
                                <View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10 }}>
                                        <Text style={styles.title}>Created bt me</Text>
                                        <Text style={styles.smallText}>See all</Text>
                                    </View>

                                    <FlatList
                                        style={{ marginBottom: 20 }}
                                        data={data?.MeetingCreatedByMe}
                                        renderItem={({ item }) => (<CreatedByMe data={item} />)}
                                        keyExtractor={item => item.meetings_id}
                                        numColumns={1}
                                        horizontal={true}
                                        ListHeaderComponent={<View style={{ width: 20 }} />}
                                        ListFooterComponent={<View style={{ width: 20 }} />}
                                        ItemSeparatorComponent={({ item, index }) => (<View style={{ width: 10 }} />)}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                            )}
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 10, }}>
                            <Text style={styles.title}>Day-to-Day</Text>
                            <Text style={styles.smallText}>See all</Text>
                        </View>
                    </View>
                    <View style={[styles.dayToday, { marginLeft: 20, marginBottom: 30 }]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, paddingVertical: 10 }}>
                            <View>
                                <Text style={styles.title}>Today</Text>
                                <DayTodayCount left={data?.TodoList?.Today?.CompletedCount} right={data?.TodoList?.Today?.TotalCount} />
                            </View>
                            <View>
                                <Text style={styles.title}>Tomorrow</Text>
                                <DayTodayCount left={data?.TodoList?.Tomorrow?.CompletedCount} right={data?.TodoList?.Tomorrow?.TotalCount} />

                            </View>
                            <View>
                                <Text style={styles.title}>Other days</Text>
                                <DayTodayCount left={data?.TodoList?.OtherDays?.CompletedCount} right={data?.TodoList?.OtherDays?.TotalCount} />

                            </View>

                        </View>
                        {/* <View style={{backgroundColor:"#6357F6",height:1}}></View>
                        <View style={{paddingHorizontal:15,paddingVertical:10}}>

                        </View> */}
                    </View>
                </ScrollView>
                {/* <Drawer></Drawer> */}
            </View>

    )
}
const Drawer = () => {
    return (
        <View>
        <View style={{
            height: Dimensions.get("window").height, 
            width: Dimensions.get("window").width/1.5, 
            backgroundColor: "red", 
            position: "absolute", 
            top: 0,
            left: 0,
        }}></View>
        </View>
    )
}

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
            <Text style={{color:"white",fontWeight:"600",fontSize:25,marginBottom:2}}>Meet Pass</Text>
            <TouchableNativeFeedback><Icon name='menu' color='white' size={30} style={{position:"absolute",left:20,top:10+insect.top}}></Icon></TouchableNativeFeedback>
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
    dayToDayNumber: {
        height: 30,
        borderRadius: 5,
        backgroundColor: "#E6606C",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: 5,
        marginTop: 10,
    },
    createdByMe: {
        borderRadius: 12,
        backgroundColor: "#4D4F95",
        padding: 15,
        width: Dimensions.get('window').width - 40,
    },
    dayToday: {
        borderRadius: 12,
        backgroundColor: "#4D4F95",
        width: Dimensions.get('window').width - 40,
    },
    myMeeting: {
        backgroundColor: "#4D4F95",
        borderRadius: 12,
        padding: 15,
        width: Dimensions.get('window').width - 40,
    }

})



export default HomeScreen