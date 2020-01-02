console.log('hello world')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')


function setCard(){
  const card = idInput.value
  cardVal = document.getElementById(card)
  cardVal.setAttribute('style', `color: ${colorInput.value};`)
}