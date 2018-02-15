function JajarGenjang(horizontal, vertical){
    let result = []
    for(let i=0; i<horizontal; i++){
        result[i] += '-'
        result.push(result[i])
        for(let j=0; j<vertical; j++){
            result[j] = '/'
            result.push(result[j])
        }
    }
    return result.join('')
}

console.log(JajarGenjang(5,4))