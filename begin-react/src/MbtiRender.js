import React from 'react';
import ColorRecommendation from './ColorRecommendation';

const MbtiRender = () => {
    const mbtiWrap = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#000',
        color: 'white',
        fontSize: '16px',
        lineHeight: '1.2'
    };

    const mbtiInner = {
        padding: '5vh 5vw'
    };

    return (
        <div>
            <div style={mbtiWrap}>
                <div style={mbtiInner}>
                    <h1>MBTI Color Recommendation</h1>
                    <ColorRecommendation />
                </div>
            </div>
        </div>
    );
}

export default MbtiRender;
