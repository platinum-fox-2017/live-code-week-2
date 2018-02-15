function generateJajarGenjang(panjang, lebar) {
  // dash
  let dash = panjang + (panjang-1)
  let strDash = ''
  for(let i = 0; i < dash; i++) {
    if(i %2 === 0) {
      strDash += '-'
    } else {
      strDash += ' '
    }
  } 
  console.log(strDash)

  //backlash
  let height = 0
  let space = 0;
  let backlash = 1;
  while(height <= lebar) {
    let str = ''
    let secSpace = 0
    for(let i = 0; i < space; i++) {
      str += ' '
    }
    if(height === lebar) {
      str += strDash
      console.log(str)
      break;
    }
    for(let i = 0; i < backlash; i++) {
      str += '\\'
    }
    secSpace += panjang + (panjang-1)

    for(let i = 0; i < secSpace; i++) {
      str += ' '
    }
    
    for(let i = 0; i < backlash; i++) {
      str += '\\'
    }

    space++
    height++
    console.log(str)
  }
}

generateJajarGenjang(3, 3)