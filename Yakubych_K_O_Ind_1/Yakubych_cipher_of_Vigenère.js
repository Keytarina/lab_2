let cypher = (function () {
	let cypher = {}; 
	let register = function (e) {
		return e === e.toUpperCase();
	};
	cypher.language = {
		ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),
		numbers : [0,1,2,3,4,5,6,7,8,9],
		symbols : "~!@#$%^&*()_+=-{};|\|/,.?><;:№ ".split(""),
		all     : [],
		joinAll : function (){
			cypher.language.all = [];
			for (let i in this) {
				if (typeof this[i] !== "function" && i !== "all") {
					cypher.language.all = cypher.language.all.concat (this[i]);
				}
			}
		}
	}

	cypher.vizhener = {
		square : [],
		genSqViz : function (lang) {
			let l = cypher.language[lang];
			for (let i = 0; i < l.length; i++) {
				this.square[i] = l.slice(i).concat(l.slice(0, i));
			}
		},
		encryption : function (lang, text, key) {
			if (lang === "all") cypher.language.joinAll ();
			else if (!Array.isArray(cypher.language[lang])) return;
			this.genSqViz(lang);

			let sText = text;

			text = text.toUpperCase();
			key  = key.toUpperCase();

			let s = "", 
				l = cypher.language[lang];
			for (let i = 0; i < text.length; i++) {
				s += this.square[l.indexOf(text[i])][l.indexOf(key[i])];
			}

			return s.split ("").map (function (e, i, a) {return register (sText[i]) ? e : e.toLowerCase();}).join("");
		},
		decryption : function (lang, key, cipher) {
			if (lang === "all") cypher.language.joinAll ();
			else if (!Array.isArray(cypher.language[lang])) return;
			this.genSqViz(lang);

			let sCipher = cipher;

			cipher = cipher.toUpperCase();
			key = key.toUpperCase();
			let s = "",
				l = cypher.language[lang];
			for (let i = 0; i < cipher.length; i++) {
				let row = l.indexOf(key[i])
				coll = this.square[row].indexOf(cipher[i]);
				s += l[coll];
			}
			return s.split ("").map (function (e, i, a) {return register (sCipher[i]) ? e : e.toLowerCase();}).join("");
		},
		outS : function () {
			for (let i = 0; i < this.square.length; i++) {
				document.write(this.square[i].join ("") + "<br>");
			}
		}
	};

	cypher.caesar = {
		encryption : function (lang, text, slip) {
			let l = cypher.language[lang];
				t = text.split("");
				s = "";
			for (let i = 0; i < text.length; i++) {
				let index = l.indexOf (t[i]) + slip;
				if (index >= l.length) index -= l.length;
				s += l[index];
			}
			return s;
		},
		decryption : function (lang, cipher, slip) {
			let l = cypher.language[lang];
				c = cipher.split("");
				s = "";
			for (let i = 0; i < c.length; i++) {
				let index = l.indexOf (c[i]) - slip;
				if (index < 0) index += l.length;
				s += l[index];
			}
			return s;
		}
	};
	return cypher;
} ());

console.log(cypher.vizhener.encryption ("ru", "простоЛюбойТекст", "ключ")); // шифруем
console.log(cypher.vizhener.decryption ("ru", "ключ", "ыэпгбфяйнпыбкюэя")); // расшифровываем
