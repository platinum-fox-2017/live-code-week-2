const generateJajarGenjang = (panjang, lebar) =>{
    let arr =[]
    for(let i = panjang; i>0; i--){
        for(let j=0; j<panjang; j++){
                arr.push(' ')
        }
        for(let j=0; j<lebar; j++){
            arr.push('|')
    }
    }
    return arr
}

console.log(generateJajarGenjang(3,3))
