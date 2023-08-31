import React from 'react';
import { useState } from 'react';
import './App.css';

/*
@ React Rule (기초)
    1. component 대문자
    2. HTML 태그 소문자
    3. Mark Up은 JSX 구문으로 작성하며, 매우 엄격하게 지켜져야 한다.
        1) 태그는 무조건 닫혀 있어야 한다.
        2) 단일태그(<br>, <input>, ...) 태그들은 Self Closing 해주어야 한다.
        3) 두개 이상의 태그는 무조건 하나의 태그로 감싸주어야 한다.
            - 태그 → 노출
        4) Fragment(<> </>) 형식으로 감싸줄 수 있다.
            - Fragment → 미노출
        5) inline style 객체 형태 작성 및 camelCase 네이밍
        6) class 작성은 className 
*/

function TicTacToe() {
    return (
        <p>Tic-Tac-Toe</p>
    )
}

export default function MyApp(){
    return (
        <>
            <TicTacToe />
        </>
    );
}