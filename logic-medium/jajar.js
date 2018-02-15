'use strict'

function jajar(satu, dua) {
    let gabung = []
    for (let i = 0; i < satu; i++) {
        let arr = []
        gabung.push(arr)
        for (let j = 0; j < dua; j++) {
            arr.push('-')
        }
    }
    return gabung
}
console.log(jajar(2, 2))
