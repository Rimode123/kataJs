let chessboard = ""

for(let i = 0; i < 8; i++){

    for(let j = 0; j < 8; j++ ){
          (j % 2 === 0) ? chessboard += '_' : chessboard += '#'
    }
    (i % 2 === 0) ? chessboard += '\n#' : chessboard += '\n'

}
console.log(chessboard)