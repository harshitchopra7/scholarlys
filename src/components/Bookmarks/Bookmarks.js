import React from 'react';
import './Bookmarks.css';
import SingleFeed from '../Feed/SingleFeed';
import { topData } from '../Feed/topData';

function Bookmarks() {
    return (
        <div className="feed">
                <div className="most_rel">
                    <p>Bookmarks</p>
                </div>
                <div>
                    {topData.map((topData) => (
                        <SingleFeed title={topData.title} keyword={topData.keyword} />
                    ))}
                </div>
        </div>
    )
}
export default Bookmarks;