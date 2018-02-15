function generateJajarGenjang(num1, num2) {
  for (var i = 0; i < num2+2; i++) {
    var temp = ''
    let space = ''
    for (var j = 0; j <= i; j++) {
      if (j === 0) {
        space += ' '
        temp += space + ' ----- ' + '\n'
      }
      else if (j === i) {
        space += ' '
        temp += space + ' ----- ' + '\n'
      }
      else {
        space += ' '
        temp += space + '|      |' + '\n'

      }
    }
  }
  for (var i = 0; i < num1; i++) {

  }
  return temp
}





console.log(generateJajarGenjang(5,4))
console.log(generateJajarGenjang(3,3))
