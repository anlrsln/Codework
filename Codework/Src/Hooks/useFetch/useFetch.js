import React,{useEffect,useState} from "react"
import axios from "axios"

const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    
    async function fetchData(){
        try {
            const {data:responseData}=await axios.get(url)
            //responseData.isFavorite=false
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }

    useEffect(()=>{fetchData()},[])


    return {data,loading,error}
}

export default useFetch;