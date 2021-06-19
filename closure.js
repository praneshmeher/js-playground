

for (var i = 1; i <= 5; i++) {
    function x(i){
        setTimeout(function(){
            console.log(i)
        }, i*1000)
    }
    x(i)
}
