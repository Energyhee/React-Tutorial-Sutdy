import React, {useRef, useState, useMemo} from 'react';
import UserList2 from './UserList2';
import UserList3 from './UserList3';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(infos){
    console.log('활성 사용자 수를 세는 중...');
    return infos.filter(info => info.active).length; // info 객체
}

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
                phone: '010-1111-1111',
                active: true
            },
            {
                id: 1,
                name: 'kim',
                phone: '010-2222-2222',
                active: false
            },
            {
                id: 2,
                name: 'sin',
                phone: '010-3333-3333',
                active: false
            }
        ]
    );

    // 컴포넌트의 state 또는 prop가 변경될 때마다 호출(리렌더링)되는데, 
    // useRef는 React의 전역저장소에 저장되기 때문에 마지막으로 업데이트 된 current 값(65번째 줄)을 유지
    const nextId = useRef(3);
    
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

    const onToggle = id => {
        // 배열의 불변성을 유지하면서 배열을 업데이트 할 때에도 map 함수를 사용 할 수 있다.
        // id값을 비교해서 id가 다르다면 그대로 두고, 같다면 active 값을 반전 시킨다.
        setUsers(info.map(inId => inId.id === id ? { ...inId, active : !inId.active } : inId));
    }

    // useMemo 라는 HOOK 함수를 사용하면 성능을 최적화 가능
    // 이전에 계산 한 값을 재사용한다는 의미를 가지고 있다.
    // userMemo 첫번째 파라미터는 어떻게 연산할지, 두번째 파라미터는 deps 배열을 넣어주면 되는데 이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해주고 바뀌 내용이 없다면 이전에 연산한 값을 재사용한다.
    const countNum = useMemo(() => countActiveUsers(info), [info]); 

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
        <UserList3 list={info} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성 사용자 수 : {countNum}</div>
        <br />
        </>
    );
}

export default App2;
