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
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppBar } from "@react-native-material/core";
import Tile from './taskTile';
import API from '../api/api'





const Loader = (props) => {
  if (props.isLoading == false) {
    return null;
  }
  return (
    <View>
      <ActivityIndicator size="large" color="grey"></ActivityIndicator>
    </View>
  )
}

const MyPassPage = () => {
  const inset = useSafeAreaInsets()
  let [pageLoading, setPageLoading] = useState(false)
  let [fullLoading, setFullLoading] = useState(false)
  let [startPage, setStartPage] = useState(0)
  let [data, setData] = useState([])

  async function loadMore() {
    if (pageLoading == true) {
      return
    }
    setPageLoading(true)
    startPage = startPage + 30
    setStartPage(startPage)
    let res = await API.apiCall(startPage)
    setPageLoading(false)
    setData([...data, ...res.MD])
  }

  useEffect(() => {
    async function getData() {
      setFullLoading(true)
      let res = await API.apiCall(startPage)
      setFullLoading(false)
      setData(res.MD)
    }
    getData()
  }, [])

  if (fullLoading == true) {
    return (
      <View style={[{ justifyContent: "center", alignItems: "center" }, styles.container]}>
        <Loader isLoading={fullLoading} />
      </View>
    )
  }

  return (
    <View style={[styles.container]}>
      <AppBar
        title="My Pass"
        titleStyle={styles.title}
        centerTitle={true}
        style={{
          paddingTop: inset.top
        }}
        transparent={true}
      />
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({ item }) => (<Tile data={item} />)}
        keyExtractor={item => item.meetings_id}
        onEndReached={() => {
          if (!this.onEndReachedCalledDuringMomentum) {
            loadMore()
            this.onEndReachedCalledDuringMomentum = true
          }
        }}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
        onEndReachedThreshold={0}
        initialNumToRender={10}
        ListFooterComponent={<Loader isLoading={pageLoading} />}
      />

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
  },

})

export default MyPassPage