import React, {useState} from 'react';

function InputSample(){
    const [text, setTxt] = useState('');

    const onChangeTxt = (e) => {
        setTxt(e.target.value);
    }
    const onResetTxt = (e) => {
        setTxt('');
    }
    
    return (
        <div>
            <h2>08. input 상태 관리하기</h2>
            <input onChange={onChangeTxt} value={text}/>
            <button onClick={onResetTxt}>초기화</button>
            <div>
                <b>값 : <span>{text}</span></b>
            </div>
        </div>
    );
}

export default InputSample;