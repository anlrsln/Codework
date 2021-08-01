import React, { useEffect, useState } from "react"
import { SafeAreaView,View,Text, FlatList,TouchableHighlight} from "react-native"
import styles from "./Favorite.style"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import JobCard from "../../Components/JobCard"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Favorite=({navigation})=>{
    const favJobList=useSelector(s=>s.jobList)
    const dispatch=useDispatch();

    function handleDrawer(){
        navigation.toggleDrawer()
    }

    function handleDetail(id){
        navigation.navigate("Detail",(id))

    }

    function renderFavoriteJobs({item}){
        item.isFavorite=true
        return <JobCard job={item} onSelect={()=>handleDetail(item.id)} removeBtn={item.isFavorite} removeItem={()=>removeFavorites(item)}/>
    }


    function removeFavorites(job){
        dispatch({type:"REMOVE_JOB",payload:{job}})
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="menu" size={30} color="#ef5350" onPress={handleDrawer}/>
                <Text style={styles.title}>Favorites</Text>
            </View>
            <View style={styles.list}>
                <FlatList data={favJobList} renderItem={renderFavoriteJobs}/>
            </View>
        </SafeAreaView>
    )
}
export default Favorite