import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function PostActions(props) {
  const { toggle } = props;

  return (
    <div style={{ float: 'right' }}>
      <Button color="primary" onClick={toggle}>
        Add Post
      </Button>
    </div>
  );
}

PostActions.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default PostActions;
