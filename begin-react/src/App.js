import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import './App.css';

function App() {
    const name = 'react';
    const style = {
        backgroundColor : '#000',
        color: 'white',
        fontSize: '16px',
        padding: '1rem'
    }
    // java script 는 중괄호를 이용하여 감싸주어야 한다.
    return (
        <>
        <Wrapper> {/* [#0] Wrapper 컴포넌트 호출 */}
            <Hello color="red" name="HCH"/> {/* [#1] Hello 컴포넌트 호출 : color = red & name = HCH 값 전달 */}
            <Hello color="pink"/> {/* [#1] Hello 컴포넌트 호출 : color = pink 값 전달 */}
            <Hello/> {/* [#1] Hello 컴포넌트 호출 : 아무 값도 전달하지 않음, defaultProps 값 호출 */}
            <Hello color="white" name="HCH2" state={true}/> {/* [#1] Hello 컴포넌트 호출 : 조건부 렌더링 */}
            <Hello color="white" name="HCH3" state={false}/> {/* [#1] Hello 컴포넌트 호출 : 조건부 렌더링 */}
            <Hello color="white" name="HCH4" state/> {/* [#1] Hello 컴포넌트 호출 : 조건부 렌더링 */}
            <> {/*<p>두개 이상의 태그는 하나의 태그로 감싸줘야한다. 단, 불필요한 태그가 많아지므로 fragment를 이용해도 된다. <></> </p>*/}
                <p className='bk-belt'>React</p> {/* class 는 className으로 */}
                <p style={style}>{name}</p>
            </>
        </Wrapper>
        <Counter />
        <InputSample />
        </>
    );
}

export default App;
