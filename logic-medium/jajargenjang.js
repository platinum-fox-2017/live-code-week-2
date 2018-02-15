// \
//   \
//     \


function generateJajarGenjang(panjang,lebar){
  let jajar = ''
  let count = 0
  for(let i=0;i<panjang;i++){
    for(let j =i;j<lebar;j++){
      jajar+= '|'
    }
    
  }
  
 console.log(jajar)
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
