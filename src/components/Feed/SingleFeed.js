import React from 'react';
import './SingleFeed.css';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useHistory } from 'react-router-dom';

function SingleFeed ({ title, keyword }) {

    const history = useHistory();

    const goToContent = () => {
        history.push("/content");
    }

    return (
        <div className="singlefeed" onClick={goToContent}>
            <div className="sf_title">
                <p>{title}</p>
            </div>
            <div className="key_book">
                <div className="sf_keyword">
                    {keyword}
                </div>
                <div className="bookmark">
                    <BookmarkBorderIcon style={{color: '#012169'}} />
                </div>
            </div>
        </div>
    )
}
export default SingleFeed;