const colors = ['green', 'red','blue','aliceBlue', 'yellow']

const btn = document.querySelector('button')
const colorName = document.querySelector('span')
const mainColor = document.getElementById('main-color')

btn.addEventListener('click',trocaCor)
function trocaCor(){
  var randomNum = Math.random()*colors.length
  randomNum = Math.floor(randomNum)
  console.log(randomNum)

  mainColor.style.backgroundColor = colors[randomNum]
  colorName.innerText = " " + colors[randomNum]
} 