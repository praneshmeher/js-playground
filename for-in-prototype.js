
function Person(){
    this.firstname='Pranesh',
    this.lastname='Meher'
}

Person.prototype.getfullname = function(){
    console.log(this.firstname+' '+this.lastname)
}

const person1 = new Person()

for(let item in person1){
    console.log(item)
}
