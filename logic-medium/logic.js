function generateJajarGenjang(panjang, lebar){
  let result = []
  for(let i=0; i<lebar+2; i++){
    let panjangStr = ''
    let space = ''
    for(let j=0; j<=panjang; j++){
      if(i == 0 || i==lebar+1){
        panjangStr += '- '
      }
      else {
        if(j == 0 || j == panjang){
          panjangStr += '| '
        }
        else{
          panjangStr += '  '
        }
      }
    }
    result.push(panjangStr)
  }
  console.log(result.join('\n'));
}


generateJajarGenjang(5,4)
//output yang dihasilkan :
// ```
// - - - - -
// \         \
//   \         \
//     \         \
//       \         \
//         - - - - -
// ```
