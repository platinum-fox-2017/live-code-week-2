function JajarGenjang(horizontal, vertical){
    let count = 0
    let hor = horizontal
    let result = []
    for(let i=0; i<vertical; i++){
        let res_temp = []
        
        for (let j = 0; j < vertical+horizontal; j++) {
            if(i === 0 || i === vertical-1){
                if(j >= count && j <= hor){
                    res_res_temp.push('-')
                } 
                else {
                    res_res_temp.push(' ')
                }
            }
            else{
                if(j === count || j === count2){
                    res_temp.push('|')
                  } else {
                    res_temp.push(' ')
                  }
                }
              }
              
          
            }
        }
    }   
    return result
}

console.log(JajarGenjang(5,4))