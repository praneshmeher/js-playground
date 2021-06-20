
const john = {
    name:'john'
}

const jane = {
    name: 'jane'
}

function greeting(arg){
    console.log('hello', this.name, arg)
}

greeting.call(john, 'rambo')
greeting.call(jane, 'rambo')