import React from 'react';
import './Feed.css';
import SingleFeed from './SingleFeed';
import { feedData } from './feedData';
import { topData } from './topData';

function Feed () {
    return (
        <div className="feed">
            <div>
                <div className="most_rel">
                    <p>Most Relevant</p>
                </div>
                <div>
                    {topData.map((topData) => (
                        <SingleFeed title={topData.title} keyword={topData.keyword} />
                    ))}
                </div>
            </div>
            <div>
                <div className="today">
                    <p>Today</p>
                </div>
                <div>
                    {feedData.map((feedData) => (
                        <SingleFeed title={feedData.title} keyword={feedData.keyword} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Feed;