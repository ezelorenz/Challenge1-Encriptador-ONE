const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none";

function btnEncriptar() {
  const textoEncriptado = encriptar(inputText.value);
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none";
  inputText.value = "";
  btnCopy.style.display = "block";
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputText.value);
  mensaje.value = textoEncriptado;
  inputText.value = "";
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];


  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto copiado");
}

function remplazar(elemento){
  let texto = elemento.value
  texto = texto.split(/[^a-z ]+/g)
  texto = texto.join("")
  elemento.value = texto
}