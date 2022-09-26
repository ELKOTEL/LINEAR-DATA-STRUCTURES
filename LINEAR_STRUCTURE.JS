var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];
var sum = 0;
var result=0;


for ( i = 0; i < arr1.length; i++) {
      
      if (!arr2.includes(arr1[i]))
        sum+=arr1[i]
}
 for ( i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]))
    sum+=arr2[i]

}
/*for (let i = 0; i < arr1.length -1; i++) {
    const element = arr1[i]; 
    var result = result + arr1[i]
    
}
*/
    

console.log(sum);
