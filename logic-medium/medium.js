function generateJajarGenjang(x, y){
    // lebar
    let geserKanan = ''
    for(let j=0; j<y; j++){
        let symbolMiring = ''
        for(let i=0; i<=x; i++){
            if(i === 0){
                symbolMiring += '|'
            }
            if(i < x-1){
                symbolMiring += '  '
            }
            if(i === x){
                symbolMiring += ' |'
            }
        }
        geserKanan += '  '
        console.log(geserKanan + symbolMiring)
    }
}

generateJajarGenjang(5,4)
generateJajarGenjang(3,3)
generateJajarGenjang(2,4)


// |   |
//   |   |
//     |   |