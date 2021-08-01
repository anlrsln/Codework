import React from "react"
import { View,Text,TouchableHighlight } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./Button.style"

const Button=({icon,onPress,btn_name})=>{
    return(
        <TouchableHighlight style={styles.btns} onPress={onPress}>
            <View style={styles.inner_btn}>
                <Icon name={icon} size={30} color="white" style={styles.icon}/>
                <Text style={styles.btn_text}>{btn_name}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default Button