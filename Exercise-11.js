var kata = 'Hello World!';


var splitted = kata.split('');
var reversed = [''];
  

function balikKata(){
  for (i=splitted.length-1;i>=0;i--){
   reversed.push([splitted[i]]);
    
  }
 
 
  
  
  console.log(reversed.join(['']));
}



balikKata();