import React, {useRef} from 'react';
import UserList2 from './UserList2';
import './App.css';

function App2() {
    // useRef 로 컴포넌트 안의 변수 만들기
    // App 컴포넌트에 선언을 하고, userList2에게 props로 전달해보자
    const userInfo = [
        {
            id: 0,
            name: 'han',
            phone: '010-1111-1111'
        },
        {
            id: 1,
            name: 'kim',
            phone: '010-2222-2222'
        },
        {
            id: 2,
            name: 'sin',
            phone: '010-3333-3333'
        }
    ];

    const last = useRef(4);

    return (
        <>
        <UserList2 list={userInfo}/>
        <br />
        </>
    );
}

export default App2;
