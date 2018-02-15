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
        tempArray.push(space.repeat(j) + '\\' + space.repeat(width + (width - heigth) + 1) + '\\')
        // tempArray.push(space.repeat(width + 1))
    }
    let miring = tempArray.join('\n')
    stringResult += miring

    tempArray = []
    for (let i = 0; i < width; i++) {
        tempArray.push('-')
    }
    let garisbawah = tempArray.join(' ')
    stringResult += '\n' + ' '.repeat(heigth) + garisbawah


    return stringResult
}

console.log(generateJajarGenjang(2, 3))