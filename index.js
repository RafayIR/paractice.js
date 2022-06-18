
for (i = 1 ; i <= 15 ; i++){
    if( i %3 == 0 && i %5 ==0 ){ 
        console.log("FIZZBUZZ")
    }else if ( i %3 == 0 && i %5 != 0){
        console.log("FIZZ")
    }else if ( i %5 == 0 && i %3 != 0){
        console.log("BUZZ")
    }else {
        console.log(i)
    }
}


//n.find([1])
//console.log(n);

/*for (var i =0 ; i < n.length ; i++ ){
    if ( n %3 === 0){
        console.log(n)
    }
    console.log(i)
}*/

