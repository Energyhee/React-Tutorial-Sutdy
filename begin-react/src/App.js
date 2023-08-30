import React from 'react';
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
    // title style
    const titleStyle = {
        backgroundColor : 'black',
        textAlign : 'center',
        fontSize : '20px',
        fontWeight : 'bold',
        lineheight : '24px',
        color : 'white'
    }

    // wrapper style
    const baseCont = {
        display : 'flex',
        alingItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',
        gap : '10px 0'
    }

    // text style
    const baseTxt = {
        margin : '0',
        padding : '0',
        textAlign : 'center',
        fontSize : '14px',
        lineHeight : '18px',
        letterSpacing : '-.5px'
    }

    // image style
    const thumbStyle = {
        margin : '0 auto',
        width : '80px',
        height : '80px',
        borderRadius : '100%',
        overflow : 'hidden'
    }

    // user info
    const user = {
        src : 'https://i.imgur.com/yXOvdOSs.jpg',
        name : 'Hedy Lamarr',
        age : '31'
    }
    return (
        <>
            <h2 className="sub-tit" style={titleStyle}>User Profile</h2>
            <div className="user-info" style={baseCont}>
                <img 
                    className="thumb" 
                    src={user.src} 
                    style={thumbStyle} 
                    alt={'photo of ' + user.name}
                />
                <p className="name" style={baseTxt}>{user.name}</p>
                <p className="age" style={baseTxt}>{user.age}</p>
            </div>
            <div className='btn-wrap' style={{textAlign: 'right', marginTop: '20px'}}>
                <button type="button" style={{width : '60px', height : '30px'}}>edit</button>
            </div>
        </>
    );
}

export default function MyApp(){
    return (
        <>
            <h1>React Study</h1>
            <UserInfomation />
        </>
    );
}