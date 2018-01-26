$(document).ready(() => {
  $buttonDropdown = $('#button-dropdown');
  $numberButton = $('#number-button');
  $containerNumber = $('#container-num');
  $inputForm = $('#input-form');
  $sentenceCipher = $('#sentence-cipher');
  $buttonCipher = $('#button-cipher');
  $buttonDecipher = $('#button-decipher');

  $buttonCipher.attr('disabled', true);
  $buttonDecipher.attr('disabled', true);

  /* Con este evento crearemos los parametros */
  $buttonDropdown.on('click', (e) => {
    $sentenceCipher.html('');
    $inputForm.val('');
    $containerNumber.html('');

    for (let i = 1; i <= 100; i++) {
      $containerNumber.append(`<li class="number">${i}</li>`);
    }

    /* Este evento dará el valor del parametro a la variable p de $buttonDropdown */
    $('#container-num li').on('click', function(e) {  
      let num = $(this).text();
      $('#value').html('');    
      $numberButton.hide();
      $buttonDropdown.prepend(`<p id="value" class="conteiner-value">${num}</p>`);

      /* Este evento recibirá la sentecia y la ejecutará con los botones de cipher y decipher */
      $inputForm
        .focus()
        .on('keyup', function(e) {
          let sentence = $(this).val();
          if (/^\s+|\s+$/.test(sentence) || /^([0-9])*$/.test(sentence)) {
            alert('No puedes dejar espacios vacios, ni escribir numeros');
            $buttonCipher.attr('disabled', true);
          } else {
            /* Este evento ejecutará la función cipher */
            $buttonCipher
              .attr('disabled', false)
              .on('click', (e) => {
                $sentenceCipher.text(cipher(sentence, num));
              });
              
            /* Este evento ejecutará la función decipher */
            $buttonDecipher
              .attr('disabled', false)
              .on('click', (e) => {
                $sentenceCipher.text(decipher(sentence, num));
              });
          }
        });
    });
  });
});