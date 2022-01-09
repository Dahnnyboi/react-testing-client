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
import { useAuth } from 'contexts/AuthContext';
import { formSubmit } from 'utils/forms';

function HomeLogin() {
  const { login, isLoggingIn } = useAuth();
  return (
    <Card style={{ width: '400px' }}>
      <CardBody>
        <h3>Login</h3>
        <Form
          onSubmit={formSubmit(login)}
          data-testid="login-form"
          noValidate
        >
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <FormFeedback>
              Required. This should be a valid email address
            </FormFeedback>
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

          <Button
            type="submit"
            color="primary"
            className="w-100 mt-3"
          >
            {isLoggingIn ? (
              <Spinner size="sm" data-testid="login-spinner">
                {' '}
              </Spinner>
            ) : (
              'Login'
            )}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default HomeLogin;
