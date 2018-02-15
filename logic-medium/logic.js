
function generatejajarGenjang(panjang,lebar){
  let result = []

  for (var i = 0; i < lebar; i++) {
    let array = []
    for (var j = 0; j <= lebar+panjang; j++) {
      if(i === 0 || i === lebar-1){
        if(j >= 0 && j <= lebar){
          array.push('-')
        } else {
          array.push(' ')
          }
      } else {
        if(j === 0 || j === lebar){
          array.push('|')
        } else {
          array.push(' ')
        }
      }
    }
    result.push(array.join(''))
  }
  console.log(result.join('\n'))
}


generatejajarGenjang(5,4);
// console.log(jajarGenjang(3,3));
