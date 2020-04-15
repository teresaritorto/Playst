import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

export const Box = ({ className, value }) => (
    <div className={ className }>
        {value}
    </div>
);

Box.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
