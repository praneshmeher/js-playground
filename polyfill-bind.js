
let person = {
    name:'john'
}

function fullname(...args){
    console.log(this.name, ...args)
}

// let getfullname = fullname.bind(person)
// console.log(getfullname())

Function.prototype.mybind = function(obj, ...args1){
    let ref = this
    return function(...args2){
        ref.call(obj, ...args1, ...args2)
    }
}

let getfullname = fullname.mybind(person, 'rambo')
console.log(getfullname('jane'))

