const hexa = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]

const btn = document.querySelector('button')
const colorName = document.querySelector('span')
const mainColor = document.getElementById('main-color')

btn.addEventListener('click',trocaCor)

function trocaCor(){
  let hexaColor = '#'

  for(i = 0; i<6; i++ ){
    function getRandomNum(){
      return Math.floor(Math.random()*hexa.length)
    }

    hexaColor += hexa[getRandomNum()]
  }

  mainColor.style.backgroundColor = hexaColor
  colorName.innerText = " " + hexaColor
}
