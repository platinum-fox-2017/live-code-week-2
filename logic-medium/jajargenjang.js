function jajarGenjang(panjang,lebar){
  let count = 0
  let count2 = 0
  let arr = []
  for (var i = panjang; i > 0; i--) {
    let temp = []
    for (var j = 0; j < lebar+panjang-i; j++) {
      if(j = lebar+panjang-i-1){
        temp.push('|')
      } else {
        temp.push('x')
      }
    }
    arr.push(temp)
  }
  return arr
}


console.log(jajarGenjang(5,4));
