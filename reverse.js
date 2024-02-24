
let number = 124356

let sum= 0


while(number >= 1){
    
    
    
    let carry= parseInt(number % 10)

    sum = parseInt((sum * 10 )+ carry)
    
    number = parseInt(number / 10)
}
console.log(sum)