import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundRoute = () => (
    <div>
        <h1>404 - Not Found!</h1>
        <p><Link to="/">
            Go to SignUp
    </Link>
        </p>
    </div>
);

export default NotFoundRoute;