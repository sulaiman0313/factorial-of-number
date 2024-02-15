function factorial(z){
    let result=1;
    for(let i=1;i<=z;i++){
        result=result*i
    }
    return result;

    
}
let resultotal=factorial(12)

console.log(resultotal)

function oddeven(resultotal){
    if(resultotal%2==0){
        console.log(resultotal + " is even")
    }
    else{
        console.log(resultotal + " is odd")
    }
}
oddeven(resultotal)