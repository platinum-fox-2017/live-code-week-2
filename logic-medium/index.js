function generateJajarGenjang(col, row) {
    let arr = []
    for (let i = 0; i < row+2; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            if (i === 0 || i === row+1) {
             temp.push('-')   
            } else {
               if (j === 0 || j === col-1) {
                   temp.push('\\') 
               } else {
                   temp.push(' ') 
               }
            }
        }
       arr.push(temp.join(' '))
    }

    let data = []
    for (let i = 0; i < arr.length; i++) {
        test = []
        for (let j = 0; j < i; j++) {
            test.push(' ')
        }
       data.push(test.join(' '))
    }

    res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(data[i] + arr[i])
    }
    console.log(res.join('\n'))

    
}


generateJajarGenjang(5, 4);
generateJajarGenjang(3, 3);
generateJajarGenjang(2, 4);