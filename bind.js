// The bind() method creates a new function that, 
// when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.

const john = {
    name:'john'
}

const jane = {
    name:'jane'
}

function greeting(){
    console.log('hello', this.name)
}

let greetjohn = greeting.bind(john)
console.log(greetjohn())

let greetjane = greeting.bind(jane)
console.log(greetjane())