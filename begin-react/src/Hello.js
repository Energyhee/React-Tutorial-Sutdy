import React from 'react'; // 함수형태로 작성

// #1
function Hello({cName, color, name, state}){
    // 비구조할당
    return (
        <div className={cName} style={{color: color}}>
            {/* {state ? <b>*</b> : null} 안녕하세요 {name} */}
            {state && <b>*</b>} 안녕하세요 {name} {/* 단축평가논리 */}
        </div>
    );
}

// 컴포넌트에 전달받은 값이 없을 때 기본으로 설정하고자 할 값 선언
Hello.defaultProps = {
    cName : 'base',
    color : '#000',
    name : '이름없음'
}

export default Hello; // 컴포넌트 내보내다