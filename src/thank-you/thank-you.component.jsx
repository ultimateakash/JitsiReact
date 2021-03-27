import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouComponent = () => {
    return (
        <>
            <p style={{ fontSize: '40px' }}>Call Ended. Thank You</p>
            <div style={{ textAlign: 'center' }}>
                <Link to="/">Call Again</Link>
            </div>
        </>
    );
}

export default ThankYouComponent;
