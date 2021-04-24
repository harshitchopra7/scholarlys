import React from 'react';
import './AddedFeeds.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function AddedFeeds({ feed, feedUrl }) {

    const history = useHistory();

    const openFeed = () => {
        history.push(`${feedUrl}`);
    }

    // toggling the pop up after clicking edit feed button
    const toggler = () => {
        // setFeedInput('');
        // var blurrrr = document.getElementById("blurrrr");
        // blurrrr.classList.toggle('active');
        var popupppp = document.getElementById("popupppp");
        popupppp.classList.toggle('active');
    }

    return (
        <div>
            <div onClick={openFeed} className="added_feeds">
                <div className="optionn">
                    <div>
                        <ArrowForwardIosIcon style={{ color: '#6666ff' }} />
                    </div>
                    <div className="option_pp">
                        <p>{feed}</p>
                    </div>
                </div>
                <div onClick={toggler} className="af_right">
                    <EditIcon style={{ color: '#6666ff', marginLeft: '10px' }} />
                </div>
            </div>

            {/* Edit Popup */}
            <div id="popupppp">
                <div className="cross_mainnnn">
                    <p>Update Feed</p>
                    <p className="crosssss" onClick={toggler}>
                        &times;
                    </p>
                </div>
                <div className="inputsss">
                    <input
                        className="input_fff"
                        placeholder="Feed Name"
                    // value={feedInput}
                    // onChange={e => setFeedInput(e.target.value)} 
                    />

                    <div className="input_keyyy">
                        <input
                            className="input_kkk"
                            placeholder="Add research keywords"
                        // value={input}
                        // onChange={event => setInput(event.target.value)}
                        />
                        <AddCircleOutlineIcon style={{ marginLeft: '20px', cursor: 'pointer', color: '#318ce7' }} />
                        {/* <button onClick={addKeyword}>Add</button> */}
                    </div>
                </div>
                {/* <div className="keyword_added_main">
                    <div className="keyword_added">
                        {keyword.map(({id, keyword}) => (
                            <AddedKeyword id={id} keyword={keyword} />
                        ))}
                    </div>
                </div> */}

               
                    <div className="no_addfeeddd">
                        <button>Delete Feed</button>
                        <button>Update Feed</button>
                    </div>

            </div>


        </div>
    );
}
export default AddedFeeds;