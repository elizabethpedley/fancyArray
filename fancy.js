function fancy(arr,sym,rev){
    if(rev == true){
        for( var i=arr.length-1;i>=0;i--){
           console.log(i + sym + arr[i]); 
        }
    }else{
        for( var i=0;i<arr.length;i++){
            console.log(i + sym + arr[i]); 
         }
    }
}