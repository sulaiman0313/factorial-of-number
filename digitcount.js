
function digit(x){
    let i=x
    let q=0
    
    while(i != 0 ){
        
        i= parseInt(i/10)
        
        q = q+1

        
    }
    console.log(q)
}
digit(12)