'use strict'

function generateJajarGenjang(row, col) {
    let result = []
    for (let i = 0; i < col; i++) {
        let arr = []
        result.push(arr)
        for (let j = 0; j < row; j++) {
            arr.push(['-'])
        }
    }
    return result
}

console.log(generateJajarGenjang(5,4))