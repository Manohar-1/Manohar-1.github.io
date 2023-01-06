 let arr=[3,2,5,7,4];

 let n=arr.length;


 for(let i=1;i<n;i++) 
 {
    let j=i-1; 
    let temp=arr[i]; 

    while(j>=0 && arr[j]>=temp) 
    {
        
            arr[j+1]=arr[j];
        
      
       
        j--;
    }
    if(arr[j+1]<=temp) 
    console.log(arr);
 }

 console.log(arr);