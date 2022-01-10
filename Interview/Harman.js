
for(var i=0; i<5; i++) {

    ((i)=>{
        setTimeout(() => console.log(i),0)
    })(i)
    
}




const App = ()=>{

    useEffect(()=>{
        console.log('')
        
        return ()=>{
        
        }
    
    },[])
    
    
    
    return(
        <Fragment>
            <Child {...props} />
        </Fragment>
    )
}

class Child extends PureComponent{
    consstructor(){
    
    }
}



const arr = [1,2,3,4,5]

const arr2 = arr.map(i => i>2)

let promise = new Promise((resolve, reject)=>{


})

promise.then((res)=>{

}).catch((error)=>{

})


for(var i=0; i<5; i++) {
function x(i){ 
    (setTimeout((i) => console.log(i),0))
    }
    
    x(i)
    
}









