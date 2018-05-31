function xo(str) {
  
  
  var jumlahX = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'x')
        jumlahX++;  
  }

  
  
  
   var jumlahO = 0;
  for(var j = 0; j < str.length; j++){
    if(str[j] == 'o')
        jumlahO++;  
  }
 
  
  
  if(jumlahX == jumlahO){
    return true;
    
  }
  
  else {
    return false;
  }
  
  
  
  
  
  
  
  
  
}


console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true