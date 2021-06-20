
function sum(a,b){
    console.log(a+b)
}

let currysum = sum.bind(this, 2)
currysum(3)