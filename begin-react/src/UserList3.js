import React from 'react';

function UserMake3({opt, onRemove}){
    return (
        <div>
            {/* onClick에 콜백 함수를 넣어주고, 해당  함수가 실행될 때 opt.id의 값을 넘겨주고 실행시킨다. */}
            <p>{opt.id} <b>{opt.name}</b> <span>({opt.phone})</span><button onClick={() => onRemove(opt.id)}>삭제</button></p>
        </div>
    );
}

function UserList3({list, onRemove}){    
    return (
        <div>
            <h4>13.배열에 항목 추가, 삭제, 수정하기</h4>
            {list.map((obj, idx) => (
                <UserMake3 opt={obj} key={obj.id} onRemove={onRemove}/>
            ))}
        </div>
    )
};

export default UserList3;