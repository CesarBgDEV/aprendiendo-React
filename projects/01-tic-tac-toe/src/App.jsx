import { useState } from 'react'

const TURNS = {
    X: '✖️',
    O: '⭕'
}
const Square = ({ children, isSelected, updateBoard,index }) =>{
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () =>{
        updateBoard(index);
    }
    return(
        <div onClick={handleClick} className= {className}>
            {children}
        </div>
    )
}

import './App.css'

const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

export function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);

    // null = no hay ganador, false = empate
    const [winner, setWinner] = useState(null);

    const checkWinner = (boardToCheck) => {
        //Revisamos todas las combinaciones ganadoras
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo
            if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
            ) {
                return boardToCheck[a]
            }
        }
        // si no hay ganador
        return null
        
    }

    const updateBoard = (index) => {

        //NO actualiza la posición si ya tiene algo
        if(board[index] || winner) return

        //actualiza el tablero
        const newBoard = [...board]
        newBoard[index] = turn // X u O
        setBoard(newBoard)
        
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        //Revisar si hay un ganador
        const newWinner = checkWinner(newBoard)
        console.log(newWinner)
        if(newWinner){
            alert(`El ganador es ${newWinner}`)
            setWinner(newWinner)
        }
    }

    return(

        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <section className='game'>
                {
                    board.map((_, index) =>{
                        return(
                            <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>

            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

        </main>
  
    )
};