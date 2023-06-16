import React from 'react';

function UserMake({opt}){
    return (
        <div>
            <b>{opt.username}</b>
            <span>({opt.email})</span>
        </div>
    );
}

function UserList(){
    const users = [
        {
            id : 1,
            username : 'han',
            email : 'han@gmail.com'
        },
        {
            id : 2,
            username : 'kim',
            email : 'kim@gmail.com'
        },
        {
            id : 3,
            username : 'sin',
            email : 'sin@gmail.com'
        }
    ];

    // Key의 존재유무에 따른 업데이트 방식 테스트
    // const arr = ['a', 'b', 'c', 'd'];
    // key없이 새로운 원소를 추가하여 arr 배열을 렌더링 할 때 그려지는 방식
    // const arr = ['a', 'z', 'b', 'c', 'd']; // a와 b사이에 z를 추가 
    const arr = [
        {
            id : 0,
            txt : 'a'
        },
        {
            id : 4,
            txt : 'z'
        },
        {
            id : 1,
            txt : 'b'
        },
        {
            id : 2,
            txt : 'c'
        },
        {
            id : 3,
            txt : 'd'
        }
    ]

    return (
        <div>
            {/* 
            <div>
                <b>{user[0].username}</b>
                <span>{user[0].email}</span>
            </div>
            <div>
                <b>{user[1].username}</b>
                <span>{user[1].email}</span>
            </div> 
            */}
            {/*
            <UserMake user={users[0]} /> <컴포넌트명 파라미터=전달값>
            <UserMake user={users[1]} />
            <UserMake user={users[2]} />
            */}
            <h2>11. 배열 렌더링하기</h2>
            <h4>배열 렌더링 해보기</h4>
            {users.map((info, idx) => (
                // <UserMake opt={info} key={info.id} /> // key라는 props를 설정해줘야 한다. key는 각 값의 고유 값
                <UserMake opt={info} key={idx} /> // 각 객체의 원소 고유값이 없을 경우 기본 설정
            ))}
            <h4>Key의 존재유무에 따른 업데이트 방식</h4>
            {arr.map((item) => (
                // 그려질때 a와 b사이에 <p>z</p>를 추가하는게 아닌 b를 z로 바꾸고 기존 b는 c로 바뀌는 식으로 b부터 하나식 밀려 하위 값이 전부 다시 그려지며 비효율 적이다
                // <p>{item}</p> 
                // 위와 같이 비효율적인 렌더링을 key를 통하여 개선할 수 있다. 수정되지 않은 기존 값들은 그대로 두고 원하는 곳에 삽입이 가능하다.
                <p key={item.id}>{item.txt}</p>
                // 배열을 렌더링할때 고유한 key 값이 있는 것이 매우 중요하다.
            ))}
        </div>
    )
};

export default UserList;