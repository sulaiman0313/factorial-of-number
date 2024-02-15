function factorial(z){
    let result=1;
    for(let i=1;i<=z;i++){
        result=result*i
    }
    return result;
}
let resultotal=factorial(1)

console.log(resultotal)

if(resultotal%2==0){
    console.log("even")
}
else{
    console.log("odd")
}