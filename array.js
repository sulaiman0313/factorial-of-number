

function findminimum(array){

    let minvalue=array[0];

    for(let i=1;i< array.length;i++){
        if(array[i] < minvalue){
            minvalue=array[i]
        }
    }
    return minvalue
}

let arr=[2,1,3,4,-1,3]

let mini=findminimum(arr)

console.log(mini)

