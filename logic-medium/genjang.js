function generateJajarGenjang(breadth,height){
    console.log(breadth);
    console.log(height);
    let print_length = height+2;
    console.log(print_length);
    let string =''
    let string2 = ''; 
    for(let i=0; i<print_length; i++){
        if(i === 0 || i === print_length-1){
            for(let j=0; j<height; j++){
                string += '='
            }
            console.log(string);
        } else {
            for(let k=0; k<breadth; k++){
                string2+='\\'
            }
            console.log(string2);
        }
    }
}

console.log(generateJajarGenjang(5,4));


// generateJajarGenjang(5,4)
// //output yang dihasilkan :
// ```
// - - - - -
// \         \
//   \         \
//     \         \
//       \         \
//         - - - - -
// ```
// generateJajarGenjang(3,3)
// //output yang dihasilkan :
// ```
// - - -
// \     \
//   \     \
//     \     \
//       - - -
// ```

// generateJajarGenjang(2,4)
// //output yang dihasilkan :
// ```
// - -
// \   \
//   \   \
//     \   \
//       \   \
//         - -
// ```
