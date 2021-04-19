import React from 'react';
import './AddedKeyword.css';
import db from '../../firebase';

function AddedKeyword ({ id, keyword })  {

    const deleteMe = (event) => {
        db.collection('keywords').doc(id).delete()
    }

    return (
        <div className="added_keyword">
            <div>
                <p>{keyword}</p>
            </div>
            <div className="keyword_delete">
                <button onClick={deleteMe}>&times;</button>
            </div>
        </div>
    )
}
export default AddedKeyword;
