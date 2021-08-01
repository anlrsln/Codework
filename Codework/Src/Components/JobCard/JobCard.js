import React from "react"
import { SafeAreaView,View,Text,TouchableWithoutFeedback} from "react-native"
import styles from "./JobCard.style"
import Button from "../Button"

const JobCard=({job,onSelect,removeBtn,removeItem})=>{
    // Taking level of a job from job obj
    const {levels}=job
    // Taking location of a job from job obj
    const {locations}=job


    

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.job_name}>{job.name}</Text>
                        <View style={styles.locations_container}>
                            <Text style={styles.locations}>{locations[0].name}</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.level}>{levels[0].name}</Text>
                    </View>
                    {removeBtn ? (
                        <View style={styles.remove_btn}>
                            <Button icon={null} onPress={removeItem} btn_name={"Remove"}/>
                        </View>
                    ) : null}
                </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}
export default JobCard;