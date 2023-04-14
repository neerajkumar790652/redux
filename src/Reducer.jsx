const Reducer =(storedata={name:"neeraj"},action)=>{
    if(action.type==="name"){
        return{
            name:action.username,
        }
    }
return storedata;
}
export default Reducer;
