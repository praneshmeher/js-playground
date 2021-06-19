
function customMap(func){
    let temp=[]
    for (let i = 0; i < this.length; i++) {
        temp.push(func(this[i]))
    }
    return temp
}

Array.prototype.customMap = customMap

let arr = [1,2,3,4,5]

let ans = arr.customMap((item)=>item*2)

console.log(ans)