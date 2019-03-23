import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Topic = ({ match }) => {
    return <h3>{match.params.topicId}</h3>;
};

const Topics = () => {
    return(
        <BrowserRouter>
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to="/topics/rendering">Rendering with React</Link>
                    </li>
                    <li>
                        <Link to="/topics/components">Components</Link>
                    </li>
                    <li>
                        <Link to="/topics/props-v-state">Props Vs state</Link>
                    </li>
                </ul>

                <hr />

                <Route path="/topics/:topicId" component={Topic} />
                <Route path="/topics/components" component={Topic} />
                <Route path="/topics/props-v-state" component={Topic} />
            </div>
        </BrowserRouter>
    );
};

export default Topics;
