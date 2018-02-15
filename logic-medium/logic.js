function generateJajarGenjang(panjang, lebar) {

    console.log(printBaris(panjang));

    for (var i = 0; i < lebar; i++) {
        console.log(spasiDepan(i) + printKolom(panjang,lebar))
    }

    console.log(spasiDepan(lebar) + printBaris(panjang));

}

function printBaris(panjang) {

    var stripe = '-';
    var arrBaris = [];
    for (var i = 0; i < panjang; i++) {
        arrBaris.push(stripe);
    }
    return arrBaris.join(' ');

}

function printKolom(panjang,lebar) {

    var index = (panjang * 2) - 1; // 9
    var pipe = '|';
    var arrKolom = [];
    for (var i = 0; i < 1; i++) {
        arrKolom.push(pipe);
    }

    for (var i = 0; i < index; i++) {
        arrKolom.push(' ');
    }

    for (var i = 0; i < 1; i++) {
        arrKolom.push(pipe);
    }

    return arrKolom.join('');

}

function spasiDepan(lebar) {

    var spasi = ' ';
    var arrJajar = [];
    
    for (var i = 0 ; i < lebar; i++) {
        arrJajar.push(spasi);
    }
    return arrJajar.join('');
        
}

generateJajarGenjang(3,3);


/*
var arr = [];
for (var i = 1; i <= 3; i++) {
    arr.push(i);
}
console.log(arr.join(' '));
*/




//TESTCASE
// console.log(`- - - - -`); 
// console.log(`|          |`); 
// console.log(`  |          |`); 
// console.log(`    |          |`); 
// console.log(`      |          |`); 
// console.log(`        - - - - -`); 

/*
generateJajarGenjang(5,4)
//output yang dihasilkan :

```
- - - - -                     // 5 - dan 0, 5 spasi
\         \                   // 2 \ dan 0, 9 spasi
  \         \                 // 2 \ dan 2, 9 spasi
    \         \               // 2 \ dan 4, 9 spasi
      \         \             // 2 \ dan 6, 9 spasi
        - - - - -             // 5 - dan 8, 9 spasi
```

pattern: 5 baris, 4 colom
setiap baris 10 character di luar spasi di depan
i = 0 print "- " sebanyak 5 kali 2 kurang 1
i = 1 print | | dan spasi sebanyak 9
i = 2 print spasi 2 dan | | dan spasi sebanyak 9
etc

*/