import React from 'react';
import './AddedFeeds.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';

function AddedFeeds({feed, feedUrl}) {

    const history = useHistory();

    const openFeed = () => {
        history.push(`${feedUrl}`);
    }

    return (
        <div onClick={openFeed} className="added_feeds">
            <div className="option af_left">
                <div>
                    <MenuBookIcon style={{ color: '#012169' }} />
                </div>
                <div className="option_p">
                    <p>{feed}</p>
                </div>
            </div>
            <div className="af_right">
                <EditIcon style={{ color: '#012169' }} />
            </div>
        </div>
    );
}
export default AddedFeeds;