function generateJajarGenjang (l,h){
    let area = ""
    let startDown = 0
    let endDown = startDown + l
    let startEnd = Math.floor((l+h)/2)
    for(let i = 0; i < h + 2; i++){
        let realLenght = l+ h
        let tmp = ""
        
        for(let j = 0; j < realLenght; j++){
            if(i === 0 && j < l){
                if(j === 0){
                    tmp += "- "
                }else{
                    tmp += "- "
                }
            }else if(i > 0 && i !== h + 1){
                if(j === startDown){
                    tmp += "|"
                } else if( j === endDown){
                    tmp += "|"
                } else{
                    tmp += "  "
                }
            } 
            else if(i === h + 1 && j >= startEnd){
                console.log(j)
                console.log(startEnd)
                if(j === startEnd){
                    tmp += "- "
                }else{
                    tmp += "- "
                }
            }else{
                tmp += "  "
            }
        }
        if(i > 0){
            startDown++
            endDown++
        }
        
        area += tmp + "\n"
    }
    console.log(area)
}

// generateJajarGenjang(5,4)
generateJajarGenjang(2,4)
// generateJajarGenjang(3,3)