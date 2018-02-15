/*
buatlah sebuah function yang menerima 2 buah parameter berupa panjang dan lebar, kemudian generate sebuah bentuk jajaran genjang yang terbalik secara horizontal. Lihat contoh driver code ini

generateJajarGenjang(5,4) //output yang dihasilkan :

- - - - -
\         \
  \         \
    \         \
      \         \
        - - - - -

*/

function generateJajarGenjang(num1, num2) {

  for(let j=0; j<= num1; j++) {
    var textPanjang = ''
    if(j == 0 || j == num1) {
      for(let i=0; i<= num1; i++) {
        textPanjang += "- "
      }
      console.log(textPanjang)
      console.log('\n');
    }
    // for(let k=0; k<num2; k++) {
    //   console.log('|');
    // }
  }
}

generateJajarGenjang(5,4)
