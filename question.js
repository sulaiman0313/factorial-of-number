

let arr=[1,2,6,5]

for(let i=0;i<arr.length;i++){
   
    for(let y= i+1;y<arr.length;y++){
        
        if(arr[i]+arr[y]==7){
            console.log(i,y)
        }

    }
}