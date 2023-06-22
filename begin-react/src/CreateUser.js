import React from 'react';

function CreateUser({name, phone, onChange, onCreate}){
    return (
        <div>
            <h2>13. 배열에 항목 추가하기</h2>
            <h4></h4>
            <input
                name="name"
                placeholder="계정명"
                onChange={onChange}
                value={name}
            />
            <input
                name="phone"
                placeholder="이메일"
                onChange={onChange}
                value={phone}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;