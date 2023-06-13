import React, {useState} from 'react';

function Counter (){
    const [number, prevNumber] = useState(0); // 배열 첫번째 원소에는 현재 상태, 두번쨰 원소에는 Setter 함수
    // 풀어서 표현하자면,
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    const onPlus = () => {
        prevNumber(test => number + 1);
    }
    const onMinus = () => {
        prevNumber(test => number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onPlus}>+1</button> {/* on이벤트명 */}
            <button onClick={onMinus}>-1</button>
        </div>
    ); 
}

export default Counter;