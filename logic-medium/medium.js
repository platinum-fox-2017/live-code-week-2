

function generateJajarGenjang(width, height) {
  // top
  let top = '';
  for (let i = 0; i < width; i++) {
    top += ' -';
  }
  console.log(top);

  let left = '';
  for (let h = 0; h < height; h++) {
    if (h>0) {
      left += ' ';
    }

    // \\ gap \\
    let gapData = '\\';
    let midWidth = (width*2)-1;
    for (let gap = 0; gap <= midWidth; gap++) {
      gapData += ' ';
    }
    gapData += '\\';
    console.log(`${left}${gapData}`);

  }
  // bottom
  console.log(left+' '+top);
}


generateJajarGenjang(5,4);
generateJajarGenjang(3,3);
generateJajarGenjang(2,4);
