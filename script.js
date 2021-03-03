const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function cipherLetter(letter, key) {
	let shift_l = alphabet.indexOf(letter);
	let shift_k = alphabet.indexOf(key);
	console.log(shift_l, shift_k);

	let shift = shift_l + shift_k % alphabet.length;
	
	// if(alphabet[shift] == undefined) {
	// 	shift = shift - alphabet.length; 
	// }
	console.log(shift);

	return alphabet[shift]; 
}

function decryption(letter, key) {
	let shift_l = alphabet.indexOf(letter);
	let shift_k = alphabet.indexOf(key);
	

}

console.log(alphabet);
// console.log(cipherLetter('b', 'f'));
console.log(cipherLetter('f', 'x'));
console.log(decryption('c', 'x'));