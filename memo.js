
function memo(func){
    let map = {}
    return ()=>{
        let key = JSON.stringify(arguments)
        if(map[key])
            return map[key]
        else{
            let value = func.apply(null, arguments)
            map[key]=value
            return value
        }
    }
}