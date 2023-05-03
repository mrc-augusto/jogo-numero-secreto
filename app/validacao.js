function verficaSeOChutePossuiUmValorValido(chute){
  const numero = +chute;

  // if(chuteForInvalido(numero)){
  //   elementoChute.innerHTML +='<div>Valor Inválido</div>';
  //   return;
  // }

  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "ENCERRAR JOGO") {
      document.body.innerHTML = `
        <h2>GAME OVER!!!</h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
        `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += "<div>Valor Inválido</div>";
    }
  }


  if(numeroForMaiorOuMenorqueOValorPermitdo(numero)){
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }
  if(numero===numeroSecreto){
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
  } else if(numero > numeroSecreto){
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
    `;
  } else{
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
    `;
  }

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorqueOValorPermitdo(numero){
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e=>{
  if(e.target.id == 'jogar-novamente'){
    window.location.reload();
  }
})
