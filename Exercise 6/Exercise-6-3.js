for(var i = 1; i <= 100; i ++) {
  if (i % 2 == 0){
    console.log ("GENAP");
  }
  else console.log ("GANJIL");
}
for(var angka1 = 1; angka1 <= 100; angka1 +=2) {
  if (angka1 % 3 == 0){
    console.log (angka1 + ' KELIPATAN 3')
  }
}

for(var angka2 = 1; angka2 <= 100; angka2 +=5) {
  if (angka2 % 6 == 0){
    console.log (angka2 + ' KELIPATAN 6')
  }
}

for(var angka3 = 1; angka3 <= 100; angka3 +=9) {
  if (angka3 % 10 == 0){
    console.log (angka3 + ' KELIPATAN 10')
  }
}
