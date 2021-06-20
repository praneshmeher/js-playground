
const john = {
    name:'john'
}

const jane = {
    name:'jane'
}

function greeting(arg){
    console.log('hello', this.name, arg)
}

let greetjohn = greeting.bind(john, 'rambo')
console.log(greetjohn())

let greetjane = greeting.bind(jane, 'rambo')
console.log(greetjane())