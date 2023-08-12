import { WINNER_COMBOS } from "../constants"


export const checkWinnerFrom = (boardToCheck) => {
    //Se revisan todas las combinaciones ganadoras para ver si ganó X u O

    for(const combo of WINNER_COMBOS) {
        const[a,b,c] = combo

        if(
            boardToCheck[a]&&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    //Se revisa empate
    //Si no hay espacios vacios
    //en el tablero

    return newBoard.every((square) => square !== null)
}