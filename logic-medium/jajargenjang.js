function generateJajarGenjang(panjang,lebar){
  let test = ''
  for(let i=0;i<lebar;i++){
    for(let j=0;j<panjang;j++){
      test+= '|'
      j++
    }
  }
  console.log(test)
}



// generateJajarGenjang(5,4)
//output yang dihasilkan :

// - - - - -
// \         \
//   \         \
//     \         \
//       \         \
//         - - - - -

generateJajarGenjang(3,3)
// //output yang dihasilkan :

// - - -
// \     \
//   \     \
//     \     \
//       - - -
// ```

// generateJajarGenjang(2,4)
// //output yang dihasilkan :

// - -
// \   \
//   \   \
//     \   \
//       \   \
//         - -
