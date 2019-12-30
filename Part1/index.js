console.log('hello world')
const board = []


function play(clickedId){
  let playerSpan = document.getElementById('player')
  let clickedElement = document.getElementById(clickedId)
  if(playerSpan.innerText === 'X'){
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  }
  else{
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }

  const tL = board[0]
  const tC = board[1]
  const tR = board[2]
  const mL = board[3]
  const mC = board[4]
  const mR = board[5]
  const bL = board[6]
  const bC = board[7]
  const bR = board[8]


  if(mC !== undefined && ((mC === tL && mC === bR) || (mC === tR && mC === bL) || (mC === mL && mC === mR) || (mC === tC && mC === bC))){
    alert(`${mC} is the winner`)
    reset()
    return
  }

  if(tL !== undefined && ((tL === tC && tL === tR)|| (tL === mL && tL === bL))){
    alert(`${tL} is the winner`)
    reset()
    return
  }

  if(bR !== undefined && ((bR === bC && bR === bL) || (bR === mR && bR === tR))){
    alert(`${bR} is the winner`)
    reset()
    return
  }

  let boardFull = true
  for(let i =0; i < 9; i++){
    if(board[i] === undefined){
      boardFull = false
    }
  }
  if(boardFull === true){
    alert("Cat's game, there is no winner")
    reset()
    return
  }
}

function reset(){
  for(let i = 0; i < board.length; i++){
    board[i] = undefined;
    let resetElement = document.getElementById(i)
    resetElement.innerText = ''
  }
}