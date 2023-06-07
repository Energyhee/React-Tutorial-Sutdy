import React from 'react'; // 함수형태로 작성

function Hello({color, name}){
    return <div style={{color: color}}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello; // 컴포넌트 내보내다