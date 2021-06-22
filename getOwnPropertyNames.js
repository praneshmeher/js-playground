

function Person(){
    this.firstname='Pranesh',
    this.lastname='Meher'
}

Person.prototype.location = 'Pune'

let person1 = new Person() 

Object.defineProperty(person1, 'getfullname', {
    value:function(){console.log(this.firstname+' '+this.lastname)},
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyNames(person1))