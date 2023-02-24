//Alterando contéudo com JavaScript
//Contéudo = elemento do Texto

/**
 * 1º Selecionar o elemento
 * formas de alterar o texto innerHTML e textContent
 */

var title = document.querySelector("#title"); //1º


// innerHTML
title.innerHTML = "Testando o texto alterado";

// textContent -> mais utilizado, recomendado e performático
var subtitle = document.querySelector(".subtitulo"); 
subtitle.textContent = "Nova ordem bb!"
