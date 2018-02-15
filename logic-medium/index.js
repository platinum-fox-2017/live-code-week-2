
function generateJajarGenjang(panjang,lebar){
  var arrSisiAtas = []
    for(var i = 0; i < panjang; i++){
      arrSisiAtas.push('- ');
    }
  
  console.log(arrSisiAtas.join(''));
  var arrSamping = [];
  var indexSampingKiri = 0;
  var indexSampingKanan = panjang;
  for(var i = 0; i < lebar; i++){
    var arrPebarisSamping = [] 
      for(var j = 0; j < indexSampingKanan + 1; j++){
        if(j == indexSampingKiri){
          arrPebarisSamping.push('\\ ');
        } else if(j == indexSampingKanan - 1){
          arrPebarisSamping.push('  \\');
        } else {
          arrPebarisSamping.push('  ');
        }
      }
      indexSampingKiri++
      indexSampingKanan++
      arrPebarisSamping = arrPebarisSamping.join('');
      arrSamping.push(arrPebarisSamping);
  }
  console.log(arrSamping.join('\n'));
  var panjangSisiBawah = (lebar * 2) + panjang;
  var arrSisiBawah = []
    for(var i = 0; i < panjangSisiBawah; i++){
      if(i < (lebar * 2)){
        arrSisiBawah.push(' ');
      } else {
        arrSisiBawah.push('- ');
      }
    }
  console.log(arrSisiBawah.join(''));
  

}

generateJajarGenjang(2,4)
