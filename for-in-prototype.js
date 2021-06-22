
function Person(){
    this.firstname='Pranesh',
    this.lastname='Meher'
    this.job=['Amdocs'],
    this.address={
        city:'Pune'
    }
}

Person.prototype.getfullname = function(){
    console.log(this.firstname+' '+this.lastname)
}

const person1 = new Person()

for(let item in person1){
    console.log(item)
}
