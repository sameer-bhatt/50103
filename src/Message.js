import React from 'react';
import PropTypes from 'prop-types';

const Message = props => (
  <div>
    Hello {props.firstName} {props.lastName}!
  </div>
);

Message.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}


export default Message;