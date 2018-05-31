function processSentence(){
  return 'Nama saya ' + name + ' umur saya ' + age + ' alamat saya di ' + address +
    ' dan saya punya hobby yaitu ' + hobby;
  
  
}










var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 