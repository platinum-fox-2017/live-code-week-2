const generateJajarGenjang = (width, heigth) => {
    let tempArray = []
    let stringResult = ''
    for (let i = 0; i < width; i++) {
        tempArray.push('-')
    }
    stringResult += tempArray.join(' ')
    stringResult += '\n'

    tempArray = []
    for (let j = 0; j < heigth; j++) {
        let space = ' '
        tempArray.push(space.repeat(j + 1) + '\\' + space.repeat(width) + '\\')
        // tempArray.push(space.repeat(width + 1))
        tempArray.push('\n')
    }
    console.log(tempArray);

    stringResult += tempArray.join(' ')

    tempArray = []
    // for (let i = 0; i < width; i++) {
    //     tempArray.push('-')
    // }

    // stringResult += tempArray.join(' ')
    // stringResult += '\n'

    return stringResult
}

console.log(generateJajarGenjang(5, 3))