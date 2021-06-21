
const john = {
    name:'john'
}

const jane = {
    name:'jane'
}

function greeting(...args){
    console.log('Hello', this.name, ...args)
}

greeting.apply(john, ['rambo', 'first blood'])
greeting.apply(jane, ['rambo', 'first blood'])
