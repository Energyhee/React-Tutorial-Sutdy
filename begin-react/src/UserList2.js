import React from 'react';

function UserMake2({opt}){
    return (
        <div>
            <b>{opt.id}</b>
            <p><span>이름</span><span>({opt.name})</span></p>
            <p><span>번호</span><span>({opt.phone})</span></p>
        </div>
    );
}

function UserList2({list}){    
    return (
        <div>
            <h2>12. useRef로 컴포넌트 안의 변수 만들기</h2>
            <h4>App.js에서 선언하고 UserList2에게 props로 전달 받는다</h4>
            {list.map((obj, idx) => (
                <UserMake2 opt={obj} key={obj.id} />
            ))}
        </div>
    )
};

export default UserList2;