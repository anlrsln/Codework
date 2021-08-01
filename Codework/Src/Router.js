import React from "react"
import {SafeAreaView,View,Text, Button} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Config from "react-native-config"
import Jobs from "./Pages/Jobs"
import Detail from "./Pages/Detail"
import Favorite from "./Pages/Favorite"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import UserProvider from "./Context/Provider"


const Stack=createStackNavigator()
const Drawer=createDrawerNavigator();



const Home=()=>{
  return(
          <Drawer.Navigator>
            <Drawer.Screen name="Jobs" component={Jobs}/>
            <Drawer.Screen name="Favorite" component={Favorite}/>
          </Drawer.Navigator>

  )
}


const Router=()=>{
  return(
    <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Codework" component={Home} 
              options={{
              headerShown:false
            }}/>
            <Stack.Screen name="Detail" component={Detail} options={{
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:25,
                fontWeight:"bold",
                color:"#ef5350"
              },
            }}/>
          </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>

  )
}

export default Router;