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

function UserInfomation() {
    // user info
    const user = {
        src : 'https://i.imgur.com/yXOvdOSs.jpg',
        name : 'Hedy Lamarr',
        age : '31'
    }

    // user data set
    const userData = [
        { id : 1, isBg : true, title : 'Call', data: '010-1234-1234' },
        { id : 2, isBg : true, title : 'Address', data: '(08363) 1149, Ori-ro, Guro-gu, Seoul, Republic of Korea' },
        { id : 3, isBg : true, title : 'Height', data: '177cm' },
        { id : 4, isBg : true, title : 'Weight', data: '65kg' }
    ]

    // user data make
    const dataMake = userData.map(opt => 
        <li key={opt.id}  style={{ backgroundColor : opt.isBg && '#eee'}}>
            <div className='flex'>
                <div className='col tit'><strong>{opt.title}</strong></div>
                <div className='col cont'>{opt.data}</div>
            </div>
        </li>
    );

    // button event
    const [count, setCount] = useState(0);
    function handleClickMinus(){
        count > 0 && setCount(count - 1);
    }
    function handleClickPlus(){
        count < 10 && setCount(count + 1);
    }
    function handleClickBtn(){
        alert('Click !');
    }

    let isLogin = false;

    return (
        <div className="wrapper">
            <h2 className="sub-tit">User Profile</h2>
            <div className="user-info">
                <img 
                    className="thumb" 
                    src={user.src} 
                    alt={'photo of ' + user.name}
                />
                <p className="name txt">{user.name}</p>
                <p className="age txt">{user.age}</p>
            </div>

            <ul className="userData">{dataMake}</ul>

            <br />
            <p>click count : {count}</p>

            <div className="btn-wrap" style={{paddingTop: '20px', marginTop: '20px', borderTop: '1px solid #ddd'}}>
                <button type="button" onClick={handleClickMinus}>Minus</button>
                <button type="button" onClick={handleClickPlus}>plus</button>
                <button type="button" onClick={handleClickBtn} className={isLogin ? 'edit' : 'base'}>{isLogin ? 'EDIT' : 'LOGIN'}</button>
            </div>
        </div>
    );
}

export default function MyApp(){
    return (
        <>
            <UserInfomation />
        </>
    );
}