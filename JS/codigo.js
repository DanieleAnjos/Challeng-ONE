function copiarTexto() {
    var textoCopiado = document.getElementById('resultado').value;
    navigator.clipboard.writeText(textoCopiado)
}

function substituirPorTextarea() {
    var imagem = document.getElementById('imagem');
    var botaoCopiar = document.querySelector('.botao__copiar');

    if (imagem){
      var textarea = document.createElement('textarea');
      textarea.id = "resultado";
      textarea.className = 'area__texto__codificado';

      imagem.parentNode.replaceChild(textarea, imagem);
     
      botaoCopiar.style.display = 'block';
    
    } else {
      console.log('A imagem não está presente na tela.');

    
    }
}



var txtAreas = document.querySelectorAll('.autoTxtArea');
for (var i = 0; i < txtAreas.length; i++) {
  txtAreas[i].addEventListener('input', function() {
    if (this.scrollHeight > this.offsetHeight) {
      this.rows += 1;
    }
  });
}

var textarea = document.getElementById('texto');
textarea.addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});

textarea.addEventListener('input', function() {
    var textoAtual = this.value;
        var textoSemAcento = textoAtual.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        this.value = textoSemAcento;
});

function criptografar() {
    let texto = document.getElementById('texto').value;
    let resultado = '';
  
    for (let letra of texto) {
        if (letra.toLowerCase() === 'a') {
            resultado += 'ai';
        } else if (letra.toLowerCase() === 'e') {
            resultado += 'enter';
        } else if (letra.toLowerCase() === 'i') {
            resultado += 'imes';
        } else if (letra.toLowerCase() === 'o') {
            resultado += 'ober';
        } else if (letra.toLowerCase() === 'u') {
            resultado += 'ufat';
        } else {
            resultado += letra;
        }
    }
  
    console.log('Palavra criptografada:', resultado);
    document.getElementById('resultado').innerText = resultado;
    return resultado;
}
  
function descriptografar() {
    let textoCriptografado = document.getElementById('texto').value;
    let resultado = '';
  
    for (let i = 0; i < textoCriptografado.length; i++) {
        let letra = textoCriptografado[i];
        
        if (letra === 'a' && textoCriptografado[i + 1] === 'i') {
            resultado += 'a';
            i++;
        } else if (letra === 'e' && textoCriptografado[i + 1] === 'n' && textoCriptografado[i + 2] === 't' && textoCriptografado[i + 3] === 'e' && textoCriptografado[i + 4] === 'r') {
            resultado += 'e';
            i += 4;
        } else if (letra === 'i' && textoCriptografado[i + 1] === 'm' && textoCriptografado[i + 2] === 'e' && textoCriptografado[i + 3] === 's') {
            resultado += 'i';
            i += 3;
        } else if (letra === 'o' && textoCriptografado[i + 1] === 'b' && textoCriptografado[i + 2] === 'e' && textoCriptografado[i + 3] === 'r') {
            resultado += 'o';
            i += 3;
        } else if (letra === 'u' && textoCriptografado[i + 1] === 'f' && textoCriptografado[i + 2] === 'a' && textoCriptografado[i + 3] === 't') {
            resultado += 'u';
            i += 3;
        } else {
            resultado += letra;
        }
    }
  
    console.log('Palavra descriptografada:', resultado);
    document.getElementById('resultado').innerText = resultado; 
    return resultado;
}


