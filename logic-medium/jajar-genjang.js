'use strict'

const generateJajarGenjang = (length,height) => {
    let result = []
    // let numlength = length * 2
    // let numheight = height * 2
    for(let i = 0; i < height; i++) {
        let arr = []
        for(let j = 0; j < length; j++) {
            if(i === 0) {
                arr.push('-')
            } else if (i === height-1 & j === length-1){
                arr.push('-')
            } else if(i > 0 && i < height && j === 0 && j === length-1) {
                arr.push('|')
            }
            else {
                arr.push(' ')
            }
        }
        result.push(arr)
    }
    return result
}

console.log(generateJajarGenjang(4,5))