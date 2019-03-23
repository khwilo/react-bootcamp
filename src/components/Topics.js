import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Topic = ({ match }) => {
    return <h3>{match.params.topicId}</h3>;
};

const Topics = ({ match }) => {
    return(
        <BrowserRouter>
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props Vs state</Link>
                    </li>
                </ul>

                <hr />

                <Route path={`${match.path}/:topicId`} component={Topic} />
            </div>
        </BrowserRouter>
    );
};

export default Topics;
