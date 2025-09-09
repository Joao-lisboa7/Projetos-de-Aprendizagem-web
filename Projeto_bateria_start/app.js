let botoes = document.querySelectorAll('.drum')

/*========Usando o While para percorrer o array da classe .drum e selecionar todos como clicáveis===========
let i = 0
while(i < botoes.length){
  botoes[i].addEventListener('click', alertClick)
  
  function alertClick(){
    alert('você clicou')
  }

  i++
}*/


for(let i = 0; i < botoes.length; i++){

  botoes[i].addEventListener('click', function(){

    let buttonInnerHtml = this.innerHTML
    console.log(buttonInnerHtml)
    
    playAudio(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
  })
}


document.addEventListener('keydown', function(event){
  console.log(event.code)

  playAudio(event.key)
  buttonAnimation(event.key)
})


function playAudio(tecla){

  switch (tecla){
    case 'w':
      let tom1 = new Audio('./sounds/tom-1.mp3')
      tom1.play()
    break;
  
    case 'a':
      let tom2 = new Audio('./sounds/tom-2.mp3')
      tom2.play()
    break;
    
    case 's':
      let tom3 = new Audio('./sounds/tom-3.mp3')
      tom3.play()
    break;

    case 'd':
      let tom4 = new Audio('./sounds/tom-4.mp3')
      tom4.play()
    break;

    case 'j':
      let tomCrash = new Audio('./sounds/crash.mp3')
      tomCrash.play()
    break;

    case 'k':
      let tomSnare = new Audio('./sounds/snare.mp3')
      tomSnare.play()
    break;

    case 'l':
      let tomKick = new Audio('./sounds/kick-bass.mp3')
      tomKick.play()
    break;
  }
}

function buttonAnimation(currentKey){

  let activeButton = document.querySelector('.' + currentKey)
  activeButton.classList.add('pressed')

  setTimeout(function(){
    activeButton.classList.remove('pressed')
  }, 150)
}