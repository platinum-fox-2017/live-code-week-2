"use strict"

function jajarGenjangGenerator(width,height) {
    let widthArr = [];
    let heightArr = ['\\','\\']
    for(let i = 0; i<width; i++) {
        widthArr.push(' -')
        heightArr.splice(1,0,'  ')
    }

    let space = ''
    console.log(widthArr.join(''));
    for(let i=0; i<height; i++) {
        console.log(space,heightArr.join(''))
        space += ' ';
    }
    console.log(space,widthArr.join(''));
}

jajarGenjangGenerator(2,4)
jajarGenjangGenerator(5,5)
jajarGenjangGenerator(3,3)