import React from 'react';

function UserMake2({opt}){
    return (
        <div>
            <b>{opt.id}</b>
            <span>({opt.name})</span>
            <span>({opt.phone})</span>
        </div>
    );
}

function UserList2({list}){
    console.log(list);
    return (
        <div>
            {list.map((obj, idx) => (
                <userMake2 opt={obj} key={obj.id} />
            ))}
        </div>
    )
};

export default UserList2;