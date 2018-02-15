function generateJajarGenjang(horizontal, vertical){
    let isi = ''
    let spasi = '';
    let arr = [];
    for(let i=0; i<vertical+2; i++){
        let row = [];
        if(i==0){
            spasi += '';
        }
        if(i>=1){
            spasi += ' ';
        }
        
        if(i==0){
            for(let j=0; j<horizontal; j++){
                isi += '- ';
            }
            row.push(spasi+isi);
        }else if(i==vertical+1){
            isi = '';
            for(let j=0; j<horizontal; j++){
                isi += '- ';
            }
            row.push(spasi+isi);
        }else{
            isi = '';
            for(let j=0; j<horizontal; j++){
                if(j==0){
                    isi += '\\ ';
                }else if(j==horizontal-1){
                    isi += '\\ ';
                }else{
                    isi += '  '
                }
                
            }
            row.push(spasi+isi);
        }
        arr.push(row.join(' '));
    }
    console.log(arr.join('\n'))
}

generateJajarGenjang(5,4);
generateJajarGenjang(3,3);
generateJajarGenjang(2,4);