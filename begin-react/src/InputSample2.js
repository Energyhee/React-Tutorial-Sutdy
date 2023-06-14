import React, {useState} from 'react';

function InputSample2(){
    const [inp, inpSet] = useState({
        name : '',
        nickname : ''
    });
    const {name, nickname} = inp; // 비구조화 할당을 통해 객체 값 추출

    // const inp = {
    //     name : '',
    //     nick : ''
    // }
    // const name = inp.name;
    // const nickname = inp.nickname

    const onChangeTxt = (e) => {
        const {value, name} = e.target; // 이벤트 호출 시 해당 e.target에서 value, name 값 추출 및 비구조화 할당
        inpSet({
            ...inp, // 기존 inp 객체를 복사 (spread 펼쳐 기존 객체 복사)
            [name]: value // key(attr name) : value(attr value)로 설정
        })
    }
    const onResetTxt = () => {
        inpSet({
            name : '',
            nickname : ''
        });
    }
    
    return (
        <div className="test">
            <div className="row">
                <p>이름</p>
                <input name="name" placeholder="이름" onChange={onChangeTxt} value={name}/>
            </div>
            <div className="row">
                <p>닉네임</p>
                <input name="nickname" placeholder="닉네임" onChange={onChangeTxt} value={nickname}/>
            </div>
            <button onClick={onResetTxt}>초기화</button>
            <div>
                <b>값 :</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample2;