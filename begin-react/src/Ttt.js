import React from 'react';
import { useState } from 'react';
import './App.css';
import './Ttt.css';


function Square({value, btnSquareClick}) {
    return (
        <button 
            type="button" 
            className="square" 
            onClick={btnSquareClick}
        >
            {value}
        </button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }

    return null;
}

export default function MyTtt() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);
    let status;

    status = (winner) ? 'Winner : ' + winner : 'Next player : ' + (xIsNext ? 'X' : 'O');

    function btnClick(i){
        if(squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();

        nextSquares[i] =  (xIsNext) ? "X" : "O"; 

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    return (
        <div className="wrapper">
            <h2 className="sub-tit">Tic-Tac-Toe</h2>
            <div className="status">{status}</div>
            <div className="t-wrap">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <div className="t-row">
                    <Square value={squares[0]} btnSquareClick={() => btnClick(0)} />
                    <Square value={squares[1]} btnSquareClick={() => btnClick(1)} />
                    <Square value={squares[2]} btnSquareClick={() => btnClick(2)} />
                </div>
                <div className="t-row">
                    <Square value={squares[3]} btnSquareClick={() => btnClick(3)} />
                    <Square value={squares[4]} btnSquareClick={() => btnClick(4)} />
                    <Square value={squares[5]} btnSquareClick={() => btnClick(5)} />
                </div>
                <div className="t-row">
                    <Square value={squares[6]} btnSquareClick={() => btnClick(6)} />
                    <Square value={squares[7]} btnSquareClick={() => btnClick(7)} />
                    <Square value={squares[8]} btnSquareClick={() => btnClick(8)} />
                </div>
            </div>
        </div>
    );
}