export default function (state,action){
    switch (action.type) {
        case "SET_JOB":
            // The job which is sent by favorite button
            const {favoriteJob}=action.payload
            // The list which contains favorite job objects
            const newList=[...state.jobList,favoriteJob]
            return {...state,jobList:newList}
        case "REMOVE_JOB":
            const {job}=action.payload
            const clearList=state.jobList.filter(i=>i.id!==job.id)
            //AsyncStorage.setItem("JOBLIST",JSON.stringify(clearList))
            return {...state,jobList:clearList}
        default:
            return state
    }
}