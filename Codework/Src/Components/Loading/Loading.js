import React from "react"
import LottieView from "lottie-react-native"



function Loading(){
    return(
        <LottieView source={require("../../Assets/58653-loading.json")} autoPlay/>
    )
}

export default Loading;