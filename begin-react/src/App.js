import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import InputSample3 from './InputSample3';
import UserList from './UserList';
import './App.css';

function App() {
    const name = 'react';
    const style = {
        backgroundColor : '#000',
        color: 'white',
        fontSize: '16px',
        padding: '1rem'
    };

    return (
        <>
        <Wrapper> {/* [#0] Wrapper 컴포넌트 호출 */}
            <Hello color="red" name="HCH"/> {/* [#1] Hello 컴포넌트 호출 : color = red & name = HCH 값 전달 */}
            <br />
            <Hello color="pink"/> {/* [#1] Hello 컴포넌트 호출 : color = pink 값 전달 */}
            <br />
            <Hello/> {/* [#1] Hello 컴포넌트 호출 : 아무 값도 전달하지 않음, defaultProps 값 호출 */}
            <br />
            <Hello color="white" name="HCH2" state={true}/> {/* [#1] Hello 컴포넌트 호출 : 조건부 렌더링 */}
            <br />
            <Hello color="white" name="HCH3" state={false}/> {/* [#1] Hello 컴포넌트 호출 : 조건부 렌더링 */}
            <br />
            <Hello color="white" name="HCH4" state/> {/* [#1] Hello 컴포넌트 호출 : 조건부 렌더링 */}
            <br />
            <> {/*<p>두개 이상의 태그는 하나의 태그로 감싸줘야한다. 단, 불필요한 태그가 많아지므로 fragment를 이용해도 된다. <></> </p>*/}
                <p className='bk-belt'>React</p> {/* class 는 className으로 */}
                <p style={style}>{name}</p>
            </>
        </Wrapper>
        <br />
        {/* <p>useState 를 통해 컴포넌트에서 바뀌는 값 관리하기</p> */}
        <Counter />
        <br />
        {/* <p>input 상태 관리하기</p> */}
        <InputSample />
        <br />
        {/* <p>여러개의 input 상태 관리하기</p> */}
        <InputSample2 />
        <br />
        {/* <p>useRef 로 특정 DOM 선택하기</p> */}
        <InputSample3 />
        <br />
        {/* <p>배열로 렌더링하기</p> */}
        <UserList />
        </>
    );
}

export default App;
