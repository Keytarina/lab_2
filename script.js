const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const phrase = 'attackatdawn';
const key = 'lemon';


function cipherMyText(text, key) {
	let newPhrase = '';

	for(let i = 0; i < text.length; i++) {
		newPhrase += cipherLetter(text[i], key[i % key.length]);

	}

	return newPhrase;
}

function decipherMyText(text, key) {
	let decriphedPhrase = '';

	for(let i = 0; i < text.length; i++) {
		decriphedPhrase += decipherLetter(text[i], key[i % key.length]);
	}

	return decriphedPhrase;
}

function cipherLetter(letter, key) {
	let shift_l = alphabet.indexOf(letter);
	let shift_k = alphabet.indexOf(key);

	let shift = (shift_l + shift_k) % alphabet.length;

	// 	shift = shift - alphabet.length;
	// }
	// console.log(shift);

	return alphabet[shift];
}

function decipherLetter(letter, key) {
	let shift_l = alphabet.indexOf(letter);
	let shift_k = alphabet.indexOf(key);

	let shift = (shift_l - shift_k + 26) % alphabet.length;

	return alphabet[shift];
}

console.log(alphabet);

const cypheredText = cipherMyText(phrase, key);

console.log(cypheredText);
console.log(decipherMyText(cypheredText, key))



