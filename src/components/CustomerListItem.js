import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ name, editAction, delAction, dni, urlPath}) => {
    return (
        <div className="customers-list-item">
            <div className="field">
                <Link to={`${urlPath}${dni}`}>{name}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
            </div>
            <div className="field">
                <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    
};

export default CustomerListItem;