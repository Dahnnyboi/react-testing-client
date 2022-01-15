import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Spinner,
} from 'reactstrap';
import PropTypes from 'prop-types';

function PostDeleteModal(props) {
  const { idToDelete, isOpen, isDeleting, toggleDelete, onSubmit } =
    props;

  return (
    <Modal isOpen={isOpen} toggle={toggleDelete}>
      <ModalHeader toggle={() => toggleDelete()}>
        Delete Post
      </ModalHeader>
      <ModalBody>
        <p>Are you sure you want to delete this post?</p>

        <Button
          onClick={() => onSubmit(idToDelete)}
          color="danger"
          data-testid="delete-button"
          className="w-100 mt-3"
        >
          {isDeleting ? (
            <Spinner size="sm" data-testid="login-spinner">
              {' '}
            </Spinner>
          ) : (
            'Delete'
          )}
        </Button>
      </ModalBody>
    </Modal>
  );
}

PostDeleteModal.propTypes = {
  idToDelete: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  toggleDelete: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

PostDeleteModal.defaultProps = {
  idToDelete: '',
};

export default PostDeleteModal;
