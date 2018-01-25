$(document).ready(() => {
  var $searchForm = $('#searchForm');
  var $searchText = $('#searchText');
  $searchForm.on('submit', (e) => {
    let word = $searchText.val();
    console.log(word);
    cipher(word, n);
  });
});

function findIndex(arr, element) {
  let position = -1;

  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i])
      position = i;
  }
  return position;
};

function cipher(word, n) {
  var cipherWord = '';

  for (let i = 0; i < word.length; i++) {
    let temp = word.charAt(i),
      length = capitalLetter.length,
      cipherLetter;

    if (findIndex(capitalLetter, temp) !== -1) {
      cipherLetter = (findIndex(capitalLetter, temp) + n) % length;
      cipherWord += capitalLetter[cipherLetter];
    } else if (findIndex(littleletter, temp) !== -1) {
      cipherLetter = (findIndex(littleletter, temp) + n) % length;
      cipherWord += littleletter[cipherLetter];
    } else {
      cipherLetter = temp;
      cipherWord += cipherLetter;
    }
  }
  return cipherWord;
};

const decipher = (word, n) => {
  var decipherWord = '',
    length = capitalLetter.length,
    n = n % length;

  for (let i = 0; i < word.length; i++) {
    var temp = word.charAt(i),
      decipherLetter;

    if (findIndex(capitalLetter, temp) !== -1) {
      decipherLetter = (findIndex(capitalLetter, temp) - n + length) % length;

      decipherWord += capitalLetter[decipherLetter];
    } else if (findIndex(littleletter, temp) !== -1) {
      decipherLetter = (findIndex(littleletter, temp) - n + length) % length;

      decipherWord += littleletter[decipherLetter];
    } else {
      decipherLetter = temp;
      decipherWord += decipherLetter;
    }
  }
  return decipherWord;
};

var capitalLetter = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
var littleletter = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');