import React, { useEffect } from 'react';

function UserMake3({opt, onRemove, onToggle}){
    // * useEffect를 사용하여 마운트, 언마운트, 업데이트 시 할 작업 설정하기
    // useEffect를 사용할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)을 넣는다.
    // 만약 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect에 등록한 함수가 호출된다.
    // useEffect에서는 함수를 반환 할 수 있는데, 이를 cleanup 함수라고 부른다.
    // cleanup 함수는 useEffect에 대한 뒷정리를 해준다고 이해하며, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출된다.
    // useEffect(() => {
    //     console.log('opt 값이 설정됨');
    //     console.log(opt);
    //     return () => {
    //         console.log('opt가 바뀌기 전..');
    //         console.log(opt);
    //     }
    // }, [opt]);
    useEffect(() => {
        console.log(opt);
    });

    return (
        <div>
            {/* onClick에 콜백 함수를 넣어주고, 해당  함수가 실행될 때 opt.id의 값을 넘겨주고 실행시킨다. */}
            <p>
                {opt.id} 
                <b
                    style={{
                        cursor : 'pointer',
                        color : opt.active ? 'green' : 'black'
                    }}
                    onClick={() => onToggle(opt.id)}
                > 
                    {opt.name}
                </b>
                <span>({opt.phone})</span>
                <button onClick={() => onRemove(opt.id)}>삭제</button>
            </p>
        </div>
    );
}

function UserList3({list, onRemove, onToggle}){    
    return (
        <div>
            <h4>13.배열에 항목 추가, 삭제, 수정하기</h4>
            {list.map((obj, idx) => (
                <UserMake3 
                    opt={obj} 
                    key={obj.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
};

export default UserList3;