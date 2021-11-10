import React, { useRef } from "react";

//styles
import { Form, Button, Alert } from "react-bootstrap";

export default function Signup({ onSignUp, loading, error, setError }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const isSignupAndNextStep = e.currentTarget.id === "proceed" ? true : false;
    onSignUp(
      emailRef.current.value,
      passwordRef.current.value,
      isSignupAndNextStep
    );
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-center mb-4">Register User</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group className="w-75 mt-4" id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group className="w-75 mt-4" id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group className="w-75 mt-4" id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>
          <Button
            disabled={loading}
            className="w-75 mt-4"
            style={{ marginTop: "1rem" }}
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <br />
          <Button
            id="proceed"
            className="w-75 mt-4"
            disabled={loading}
            style={{ marginTop: "1rem" }}
            type="submit"
            onClick={handleSubmit}
          >
            Sign up and Proceed Completing Profile
          </Button>
        </Form>
      </div>
    </>
  );
}
