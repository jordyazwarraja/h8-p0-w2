var nama = 'j';
var peran = 'penyihir';

if (nama === '' && peran === ''){
  console.log( 'Nama harus diisi!');
}

if (nama!=='' && peran === ''){
  
  console.log( 'Halo, ' + nama +  ' pilih peranmu untuk memulai game!');
}


if (nama !=='' && peran ==='ksatria'){
  
  console.log('Halo ' + peran + ' ' + nama + ' Kamu dapat menyerang dengan senjatamu!');
}

if (nama !== '' && peran === 'tabib'){
  console.log('Halo ' + peran + ' ' + nama + ' Kamu akan membantu temanmu yang terluka.');
}

if (nama !== '' && peran === 'penyihir'){
  console.log('Halo ' + peran + ' ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu!');
}

