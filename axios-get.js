


axios.get('/user?userId=123')
.then((response)=>{

})
.catch((error)=>{

})
.then(()=>{
    // always executed
})



axios.get('/get',{
    params:{
        userId:123
    }
})
.then(()=>{

})
.catch(()=>{

})
.then(()=>{

})