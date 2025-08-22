import React from 'react';
import {
  Card,
  CardBody,
  Form,
  Input,
  FormGroup,
  FormFeedback,
  Label,
  Button,
  Spinner,
} from 'reactstrap';
import { formSubmit } from '@/utils/forms';
import PropTypes from 'prop-types';

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

function SignupForm(props) {
  const { onSubmit, isSubmitting } = props;

  return (
    <Card style={{ width: '400px' }}>
      <CardBody>
        <h3>Signup</h3>
        <Form
          onSubmit={formSubmit(onSubmit)}
          data-testid="signup-form"
          noValidate
        >
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <FormFeedback>Required.</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <FormFeedback>Required.</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Email" required />
            <FormFeedback>Required.</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <FormFeedback>Required</FormFeedback>
          </FormGroup>

          <Button type="submit" color="primary" className="w-100 mt-3">
            {isSubmitting ? (
              <Spinner size="sm" data-testid="signup-spinner">
                {' '}
              </Spinner>
            ) : (
              'Sign up'
            )}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default SignupForm;
