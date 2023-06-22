import React, {useRef, useState} from 'react';
import UserList2 from './UserList2';
import UserList3 from './UserList3';
import CreateUser from './CreateUser';
import './App.css';

function App2() {
    // useRef 로 컴포넌트 안의 변수 만들기
    // App 컴포넌트에 선언을 하고, userList3에게 props로 전달해보자
    const [inputs, setInputs] = useState({
        name : '',
        phone : ''
    });
    
    const {name, phone} = inputs;
    
    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const [info, setUsers] = useState(
        [
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
        ]
    );

    // 컴포넌트의 state 또는 prop가 변경될 때마다 호출(리렌더링)되는데, 
    // useRef는 React의 전역저장소에 저장되기 때문에 마지막으로 업데이트 된 current 값(62번째 줄)을 유지
    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id : nextId.current,
            name,
            phone            
        }

        setUsers([...info, user]);

        setInputs({
            name : '',
            phone : ''
        });
        nextId.current += 1; // useRef 값 + 1 씩하여 업데이트
    };

    const onRemove = id => {
        setUsers(info.filter(inId => inId.id !== id)); // info 배열
    };

    return (
        <>
        {/* <p>useRef로 컴포넌트 안의 변수 만들기</p> */}
        <UserList2 list={info}/>
        <br />
        {/* <p>배열에 항목 추가, 삭제, 수정하기</p> */}
        <CreateUser 
            name={name}
            phone={phone}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList3 list={info} onRemove={onRemove}/>
        <br />
        </>
    );
}

export default App2;
