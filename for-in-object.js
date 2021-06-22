
const person = {
    firstname:'Pranesh',
    lastname:'Meher',
    jobs:['Innoplexus', 'Amdocs'],
    address:{
        city:'Pune',
        pincode:'410504'
    },
    getfullname:function(){
        console.log(this.firstname+' '+this.lastname)
    }
}

for(let item in person){
    console.log(item)
}
