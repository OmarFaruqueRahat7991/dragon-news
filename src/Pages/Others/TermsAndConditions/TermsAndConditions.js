import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here Is Our Terms And Conditions.</h3>
            <p>Go back To <Link to='/register'>Registration Page</Link></p>
        </div>
    );
};

export default TermsAndConditions;