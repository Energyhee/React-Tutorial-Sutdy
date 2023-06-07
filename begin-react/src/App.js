import React from 'react';
import Hello from './Hello';
import Wrap from './Wrap';
import './App.css';

function App() {
    const name = 'react';
    const style = {
        backgroundColor : '#000',
        color: 'white',
        fontSize: '16px',
        padding: '1rem'
    }

    return (
        <div class="wrapper">
            {/*<p>두개 이상의 태그는 하나의 태그로 감싸줘야한다. 단, 불필요한 태그가 많아지므로 fragment를 이용해도 된다. <></> </p>*/}
            <Hello color="red" name="HCH"/>
            <Hello color="pink"/>
            <> 
                <p className='bk-belt'>React</p>
                <p style={style}>{name}</p>
            </>
        </div>
    );
}

export default App;
