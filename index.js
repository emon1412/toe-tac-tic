var prompt = require('cli-prompt')

function TicTacToe() {
  let boardArr = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
  let winningPositions = ['012', '345', '678', '036', '147', '258', '048', '246']
  let currentPlayer = 1
  let xArray = []
  let oArray = []

  this.printBoard = () => {
    let board = ''
    for (var i = 0; i < boardArr.length; i++) {
      if (i % 3 === 0) {
        board += '\n'
      }
      board += boardArr[i]
      board += ' '
    }
    console.log(board)
  }
  this.playX = () => {
    prompt('Player\'s 1 turn! Please enter position: ', (val) => {
      if (boardArr[val] !== '_') {
        console.log('Position is already taken!!')
        this.playX()
      } else {
        boardArr[val] = 'x'
        xArray.push(val)
        currentPlayer = 2
        this.printBoard()
        this.isOver()
      }
    })
  }

  this.playO = () => {
    prompt('Player\'s 2 turn! Please enter position: ', (val) => {
      if (boardArr[val] !== '_') {
        console.log('Position is already taken!!')
        this.playO()
      } else {
        boardArr[val] = 'o'
        oArray.push(val)
        currentPlayer = 1
        this.printBoard()
        this.isOver()
      }
    })
  }

  this.isOver = () => {
    let x = xArray.sort().join('')
    let o = oArray.sort().join('')
    for (var pos of winningPositions) {
      if (x.includes(pos)) {
        console.log('Player 1 wins!')
        return
      } else if (o.includes(pos)) {
        console.log('Player 2 wins!')
        return
      }
    }
    if (boardArr.every(item => item !== '_')) {
      console.log('It\'s a tie!')
      return
    } else if (currentPlayer === 1) {
      this.playX()
    } else if (currentPlayer === 2) {
      this.playO()
    }
  }
}

var a = new TicTacToe()
a.printBoard()
a.playX()
