import React from "react"
import { SafeAreaView,View,Text,Button, FlatList} from "react-native"
import styles from "./Jobs.style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import useFetch from "../../Hooks/useFetch"
import Config from "react-native-config"
import JobCard from "../../Components/JobCard"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"

const Jobs=({navigation})=>{
    const {loading,error,data}=useFetch(Config.API_JOBS_URL)

    function handleDrawer(){
        navigation.toggleDrawer()
    }

    
    function handleDetail(id){
        navigation.navigate("Detail",(id))
    }

    function renderCard({item}){
        return <JobCard job={item} onSelect={()=>handleDetail(item.id)}/>
    }

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title}>Jobs</Text>
                <Icon name="menu" size={30} color="#ef5350" onPress={handleDrawer}/>
            </View>
            <View style={styles.body_container}>
                <FlatList data={data.results} renderItem={renderCard}/>
            </View>
        </SafeAreaView>
    )
}
export default Jobs