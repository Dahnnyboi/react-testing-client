import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Button,
} from 'reactstrap';
import { formSubmit } from 'utils/forms';
import PropTypes from 'prop-types';

function PostAddModal(props) {
  const { data, isOpen, isLoading, isSubmitting, toggle, onSubmit } =
    props;
  const { title, message } = data || {};
  const header = data ? 'Edit Post' : 'Add Post';
  const submitText = data ? 'Save changes' : 'Add Post';

  if (isLoading) {
    <Modal isOpen toggle={toggle}>
      <ModalBody>
        <Spinner size="sm" />
      </ModalBody>
    </Modal>;
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={() => toggle()}>{header}</ModalHeader>
      <ModalBody>
        <Form onSubmit={formSubmit(onSubmit)} noValidate>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Title"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <Input
              type="textarea"
              name="message"
              defaultValue={message}
              placeholder="Message"
              required
            />
          </FormGroup>

          <Button
            type="submit"
            color="primary"
            className="w-100 mt-3"
          >
            {isSubmitting ? (
              <Spinner size="sm" data-testid="login-spinner">
                {' '}
              </Spinner>
            ) : (
              submitText
            )}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}

PostAddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  isSubmitting: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};

PostAddModal.defaultProps = {
  isLoading: false,
  data: {},
};

export default PostAddModal;
