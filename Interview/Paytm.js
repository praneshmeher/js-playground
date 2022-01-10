// for(i=0;i<10;i++){
//     setTimeout(()=>{console.log(i)},0)
// }
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10


// for(var i=0;i<10;i++){
//     setTimeout(()=>{console.log(i)},0)
// }
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10


// for(const i=0;i<10;i++){
//     setTimeout(()=>{console.log(i)},0)
// }
// TypeError: Assignment to constant variable.


// for(let i=0;i<10;i++){
//     setTimeout(()=>{console.log(i)},0)
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

   
function add() {
    let num = 0
    let incr = function(){
        num = num + 10
        console.log(num)
    }
    return this
}

let data = add();
data.incr()//10
data.incr()//20
data.incr()//30


// ----------------------------------------------------------
//     Function axios(apiUrl, time) {
//     //code here
//     New Promise((resolve, reject)=>{
//     fetch(url)
//     })
//     Let promise = fetch(apiurl)
    
//     promise.then((res)=>{
//     settimeou
//     })
        
//     Timer = settimeout(()=>{
//     },time)
    
//     }