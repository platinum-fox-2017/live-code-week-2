function jajarGenjang(num1, num2){
  let garisHorizontal = '';
  let garisVertikal = '|'
  for(let i=0; i<num1; i++){
    if(i===num1-1){
      garisHorizontal += '- ';
      garisVertikal += ' |';
    } else {
      garisHorizontal += '- ';
      garisVertikal += '  ';
    }
  }

  let spasi = '';
  for(let i=0; i<=num2+1; i++){
    if(i===0){
      console.log(garisHorizontal);
    }
    else if(i===num2+1){
      let tambah = spasi + garisHorizontal;
      console.log(tambah);
    } else {
      let tambah = spasi + garisVertikal;
      console.log(tambah);
      spasi += '  ';
    }
  }
}

jajarGenjang(5,4);
jajarGenjang(3,3);
jajarGenjang(2,4);
