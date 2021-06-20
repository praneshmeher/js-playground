
const person = {
    firstname:'Pranesh',
    lastname:'Meher',
    fullname:function(){
        console.log(this.firstname+' '+this.lastname)
    }
}

person.fullname()

const getfullname = person.fullname

getfullname()

