function JajarGenjang(horizontal, vertical){
    let count = 0
    let hor = horizontal
    let result = []
    for(let i=0; i<vertical; i++){
        let res_temp = []
        
        for (let j = 0; j < vertical+horizontal; j++) {
            if(i === 0 || i === vertical-1){
                if(j >= count && j <= hor){
                    res_temp.push('-')
                } 
                else {
                    res_temp.push(' ')
                }
            }
            else{
                
          
            }
        }
    }   
    return result
}

console.log(JajarGenjang(5,4))