function generateJajarGenjang(horizontal, vertical){
    let isi = ''
    let spasi = '';
    let tempHorizontal = horizontal;
    let arr = [];
    for(let i=0; i<vertical+2; i++){
        let row = [];
        if(i>=1){
            spasi += ' '
        }
        
        if(i==0){
            for(let j=0; j<tempHorizontal; j++){
                isi += '-';
            }
            row.push(spasi+isi);
            tempHorizontal = 0;
        }else{
            for(let j=0; j<tempHorizontal; j++){
                isi += '|';
            }
            row.push(spasi+isi);
            tempHorizontal = 0;
        }
        arr.push(row.join(' '));
    }
    console.log(arr.join('\n'))
}

generateJajarGenjang(5,4);
generateJajarGenjang(3,3);
generateJajarGenjang(2,4);