import React from 'react';
import './Meme.css';
import meme1 from '../images/meme1.jfif';

function Meme () {
    return (
        <div className="meme">
            <p>Meme Corner</p>
            <img src={meme1} alt="" />
        </div>
    )
}
export default Meme;