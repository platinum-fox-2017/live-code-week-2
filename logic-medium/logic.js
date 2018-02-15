function generateJajarGenjang (num1, num2){
    let str = ''
    // upper part
    for (let i = 0; i < num1; i++){
        str += '-'
        for (let j = 0; j < 1; j++){
            str += ' '
        }   
    }
    console.log(str)
    // mid part
    let str2 = ''
    for (let k = 0; k < num2; k++){
        for (let l = 0; l < num2; l+=2){
            let add = (k*2)
            str2 += ' '.repeat(add/2)
        }
        str2 += '|' + ' '.repeat(num1*2-1) + '|' + '\n'
    }
    console.log(str2.trimRight())
    // bottom part
    console.log(' '.repeat(num2*2) + str.trim())
}

// TEST CASE
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
generateJajarGenjang(3,3)
//output yang dihasilkan :
// ```
// - - -
// \     \
//   \     \
//     \     \
//       - - -
// ```

generateJajarGenjang(2,4)
//output yang dihasilkan :
// ```
// - -
// \   \
//   \   \
//     \   \
//       \   \
//         - -
// ```