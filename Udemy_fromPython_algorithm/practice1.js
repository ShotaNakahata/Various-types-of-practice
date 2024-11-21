//O(log(n)) O(log10) 

function logn(numbers) {
    if(numbers<1){
        return console.log("finished");
    }else{
        console.log(numbers)
        return logn(numbers/2)
    }
    
}
logn(10)