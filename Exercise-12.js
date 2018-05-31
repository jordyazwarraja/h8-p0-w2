function konversiMenit(menit) {
  
  
      var modMenit = menit % 60;
var jam = (menit-modMenit) / 60;

 if(modMenit < 10){
  
 
  
return jam + ':0' + modMenit;
  
 }  
  
  else {
    return jam +':'+ modMenit;
  }
  
  
  
}

 
  
  
  
  
  
  
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00