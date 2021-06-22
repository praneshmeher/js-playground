

const person = {
    firstname:'Pranesh',
    lastname:'Meher',
   
}

Object.defineProperty(person, 'getfullname', {
    value:function(){console.log(this.firstname+' '+this.lastname)},
    writable:false,
    enumerable:false
})

for(let item in person){
    console.log(item)
}
