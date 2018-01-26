/* Esta función sirve para buscar la posición de las 
   letras en el array de letras que le corresponda */
const findIndex = (arr, element) => {
  var position = -1;

  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i])
      position = i;
  }
  return position;
};

/* Esta función cifra la frase escrita en el input, según el parametro que elija */
const cipher = (word, num) => {
  var cipherWord = '';

  for (let i = 0; i < word.length; i++) {
    length = littleLetter.length;
    let temp = word.charAt(i);
    let cipherLetter;

    if (findIndex(capitalLetter, temp) !== -1) {
      cipherLetter = (findIndex(capitalLetter, temp) + parseInt(num)) % length;
      cipherWord += capitalLetter[cipherLetter];
    } else if (findIndex(littleLetter, temp) !== -1) {
      cipherLetter = (findIndex(littleLetter, temp) + parseInt(num)) % length;
      cipherWord += littleLetter[cipherLetter];
    }
  }
  return cipherWord;
};

/* Esta función decifra la frase escrita en el input, según el parametro que elija */
const decipher = (word, num) => {
  length = littleLetter.length;
  num = num % length;
  var decipherWord = '';

  for (let i = 0; i < word.length; i++) {
    let temp = word.charAt(i);
    let decipherLetter;

    if (findIndex(capitalLetter, temp) !== -1) {
      decipherLetter = (findIndex(capitalLetter, temp) - parseInt(num) + length) % length;
      decipherWord += capitalLetter[decipherLetter];
    } else if (findIndex(littleLetter, temp) !== -1) {
      decipherLetter = (findIndex(littleLetter, temp) - parseInt(num) + length) % length;
      decipherWord += littleLetter[decipherLetter]; 
    } 
  }
  return decipherWord;
};

/* Utlizaremos estos arrays en las funciones cipher y decipher, para determinar el codigo ascii de las letras */
const capitalLetter = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
const littleLetter = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');