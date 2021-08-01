import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./Reducers"
import initialState from "./Store"
 


const UserProvider=({children})=>{
    const store=createStore(reducers,initialState)
    return(
        <Provider store={store}>{children}</Provider>
    )
}

export default UserProvider;