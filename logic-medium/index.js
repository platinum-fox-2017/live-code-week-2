function panjangg(panjang){
  let simpan=''
  for(let i=0;i<panjang;i++){
    simpan += ' -'
  }
  return simpan
}


function generateJajarGenjang(panjang,lebar){
  var spaceurut=''
  console.log(panjangg(panjang))
  for(let i=0;i<lebar;i++){
    let space=''
    for(let j=0;j<panjang;j++){
      space +='  '
    }
    console.log(spaceurut+'\\'+space+'\\')
    spaceurut +=' '
  }
  console.log(spaceurut+panjangg(panjang))

}

generateJajarGenjang(2,4)
