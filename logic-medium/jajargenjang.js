function jajarGenjang(lebar,panjang){
  let count = 0
  let count2 = lebar
  let arr = []
  for (var i = 0; i < panjang; i++) {
    let temp = []
    for (var j = 0; j < lebar+panjang; j++) {
      if(i === 0 || i === panjang-1){
        if(j >= count && j <= count2){
          temp.push('-')
        } else {
          temp.push(' ')
          }
      } else {
        if(j === count || j === count2){
          temp.push('|')
        } else {
          temp.push(' ')
        }
      }
    }
    arr.push(temp.join(''))
    count += 1
    count2 += 1
  }
  return arr.join('\n')
}


console.log(jajarGenjang(10,12));
console.log(jajarGenjang(9,11));
console.log(jajarGenjang(20,15));
