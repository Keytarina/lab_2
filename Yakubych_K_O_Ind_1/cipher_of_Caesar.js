//Індивідуальна рорбота №1
//Тема:"Шифр Цезаря"

//Виконала: Якубич Катерина
//Варіант 3


let alphabet = 'абвгдеєжзиіїйклмнопрстуфхчцшщьюя';
let symbols = ' ~!@#$%^&*()_+=-{};|\|/,.?><;:№1234567890';

let key = 3;

let phrase = "Реляційна система управління базами даних",
    encryptedPhrase = "";
    decryptedPhrase = "";

console.log("Речення, яке потрібно зашифрувати: ", phrase);

let position,
    changedPosition;

function encryption(){ // функція шифрування
    phrase = phrase.toLowerCase();

    for (let char of phrase) {

        position = alphabet.indexOf(char); 
        changedPosition = alphabet[position + key];

        if(symbols.includes(char)) {
            encryptedPhrase += char;
        } else if(changedPosition == undefined) { // якщо позиція виходить за межі, починаємо з початку алфавіта
            encryptedPhrase += alphabet[position + key - alphabet.length];   
        } else {
            encryptedPhrase += changedPosition;
        }
        
    }
    return encryptedPhrase;
}

function decryption(encryptedPhrase) { // функція розшифрування

    for (let char of encryptedPhrase) {

        position = alphabet.indexOf(char); 
        changedPosition = alphabet[position - key];

        if(symbols.includes(char)) {
            decryptedPhrase += char;
        } else if(changedPosition == undefined) { // якщо позиція виходить за межі, починаємо з кінця алфавіта
            decryptedPhrase += alphabet[position - key + alphabet.length];   
        } else {
            decryptedPhrase += changedPosition;
        }
    }
    return decryptedPhrase;
}

console.log("Зашифроване речення: ", encryption());
console.log("Розшифроване речення: ", decryption(encryptedPhrase));
