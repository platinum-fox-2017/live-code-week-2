function generateJajarGenjang(panjang, lebar) {
	let panjangArr = [];
	for (let i = 0; i < panjang; i++) panjangArr.push('-');
	console.log(panjangArr.join(' '));

	for (let i = 0; i <= lebar * 2 - 1; i+=2) {
		let temp = '';
		
		for (let j = 0; j < i; j++) temp += ' ';
		
		temp += '\\';
		
		for (let k = 1; k < panjang*2; k++) temp += ' ';

		temp += '\\';

		console.log(temp);
	}

	let temp = '';
	for (let i = 0; i < lebar*2; i++) temp += ' ';

	console.log(temp + panjangArr.join(' '));
}

generateJajarGenjang(5,4);
generateJajarGenjang(3,3);
generateJajarGenjang(2,4);
