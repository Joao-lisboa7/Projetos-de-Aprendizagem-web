let play = document.querySelector('#play').addEventListener('click', trocar)

function trocar(){
  /*----------------dado 1-----------------*/
  let random_n1 = Math.floor(Math.random()*6+1)
  let randomDiceImg = 'img/dice' + random_n1 + '.png'
  
  let firstDice = document.querySelectorAll('img')[0]
  firstDice.setAttribute('src', randomDiceImg)
  firstDice.style.width = '80%'
  
  /*----------------dado 2-----------------*/
  let random_n2 = Math.floor(Math.random()*6+1)
  let randomDiceImg2 = 'img/dice' + random_n2 + '.png'
  
  let secondDice = document.querySelectorAll('img')[1]
  secondDice.setAttribute('src', randomDiceImg2)
  secondDice.style.width = '80%'
  
  /*---------Mensagens sobre o jogo--------*/
  let msg = document.querySelector('h1')
  
  if(random_n1>random_n2){
    msg.innerText = 'O jogador 1 venceu'
  }else if(random_n2>random_n1){
    msg.innerText = 'O jogador 2 venceu'
  }else{
    msg.innerText = 'Empate'
  }
}
