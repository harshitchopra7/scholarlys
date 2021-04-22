import React from 'react';
import './AddedFeeds.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function AddedFeeds({feed, feedUrl}) {

    const history = useHistory();

    const openFeed = () => {
        history.push(`${feedUrl}`);
    }

    return (
        <div onClick={openFeed} className="added_feeds">
            <div className="optionn">
                <div>
                    <ArrowForwardIosIcon style={{color: '#6666ff'}} />
                </div>
                <div className="option_pp">
                    <p>{feed}</p>
                </div>
            </div>
            <div className="af_right">
                <EditIcon style={{ color: '#6666ff', marginLeft: '10px' }} />
            </div>
        </div>
    );
}
export default AddedFeeds;