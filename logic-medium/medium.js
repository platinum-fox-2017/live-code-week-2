function generateJajarGenjang(num1, num2) {
  var tempStrip = ''
  var space1 = ' '
  for (var i = 0; i < num1; i++) {
    // if (i === num1-1) {
    space1 += ' '
    tempStrip += '- '
    // }

  }
  for (var i = 0; i < num2+2; i++) {
    var temp = ''
    let space = ''
    for (var j = 0; j <= i; j++) {
      if (j === 0) {
        space += ' '
        temp += space + tempStrip + '\n'
      }
      else if (j === i) {
        space += ' '
        temp += space + tempStrip + '\n'
      }
      else {
        space += ' '
        temp += space + '|' + space1+ '|' + '\n'
      }
    }
  }
  // console.log(tempStrip);
  return temp
}





console.log(generateJajarGenjang(5,4))
console.log(generateJajarGenjang(3,3))
console.log(generateJajarGenjang(2,4))
