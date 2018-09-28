import React from 'react';
import { Button, Form, Input, CardBody } from 'reactstrap';
import './commentsForm.css';

export const CommentForm = ({ handleFormSubmit, handleInputChange, emailValue, messageValue }) => {
  return (
    <CardBody className="comments-form">
      <Form onSubmit={(event) => handleFormSubmit(event)}>
        <Input
          type="email"
          name="email"
          value={emailValue}
          placeholder="Email"
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          type="textarea"
          name="message"
          value={messageValue}
          placeholder="message"
          onChange={(event) => handleInputChange(event)}
        />
        <Button
          disabled={emailValue === '' && messageValue === ''}
          color="primary"
        >
          Submit
        </Button>
      </Form>
    </CardBody>
  );
};

export default CommentForm;
