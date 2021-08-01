import React from "react"
import { SafeAreaView,View,Text,ScrollView} from "react-native"
import styles from "./Detail.style"
import Config from "react-native-config"
import useFetch from "../../Hooks/useFetch"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"
import HTML, { useContentWidth } from "react-native-render-html"
import Button from "../../Components/Button"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


const Detail=({route})=>{
    const jobList= useSelector(s=>s.jobList)

    const dispatch=useDispatch();
    const contentWidth=useContentWidth()

    // Identifying ID
    const id=route.params
    const {loading,error,data}=useFetch(`${Config.API_ID_URL}${id}`)

    
    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }


    const source={
        html:`${data.contents}`
    }
    
    function AddFavorite(){
        const isTrue=jobList.some(i=>i.id===data.id)
        if(!isTrue)
            dispatch({type:"SET_JOB",payload:{favoriteJob:data}})
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.job_title}>{data.name}</Text>
                <Text style={styles.locations}>Locations : {data.locations[0].name}</Text>
                <Text style={styles.level}>Job Level : {data.levels[0].name}</Text>
                <Text style={styles.job_detail}>Job Detail</Text>
            </View>
            <View style={styles.body}>
                <ScrollView style={{ flex: 1, paddingTop:10, paddingHorizontal: 20}}>
                    <HTML
                        contentWidth={contentWidth}
                        source={source}
                        style={styles.content}
                    />
                </ScrollView>
            </View>
            <View style={styles.btn_container}>   
                <Button icon={"logout"} btn_name={"Submit"} onPress={null}/>
                <Button icon={"heart"} btn_name={"Favorite"} onPress={AddFavorite}/>
            </View>
            
        </SafeAreaView>
    )
}
export default Detail;
