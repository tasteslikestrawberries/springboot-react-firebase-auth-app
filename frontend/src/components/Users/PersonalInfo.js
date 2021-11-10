import React from "react";
import { Form } from "react-bootstrap";

const PersonalInfo = ({ handleChange }) => {
  return (
    <>
      <br />
      <div className="d-flex flex-column align-items-center">
        <h2> Personal Info </h2>
        <Form.Group className="w-75 mt-4">
          <Form.Control
            required
            placeholder="Name"
            onChange={handleChange("name")}
            name="name"
          />
        </Form.Group>
        <Form.Group className="w-75 mt-4">
          <Form.Control
            required
            placeholder="Surname"
            onChange={handleChange("surname")}
            name="surname"
          />
        </Form.Group>
        <Form.Group className="w-75 mt-4">
          <Form.Control
            type="date"
            placeholder="Birth Date"
            onChange={handleChange("birthdate")}
            name="birthdate"
          />
        </Form.Group>
        <Form.Group className="w-75 mt-4">
          <Form.Control
            required
            placeholder="Gender"
            as="select"
            onChange={handleChange("gender")}
            name="gender"
          >
            <option selected disabled>
              {" "}
              Gender{" "}
            </option>{" "}
            <option> Male </option> <option> Female </option>{" "}
            <option> Other </option>{" "}
          </Form.Control>{" "}
        </Form.Group>
        <Form.Group className="w-75 mt-4" enctype="multipart/form-data">
          Profile Photo <br />
          <input
            onChange={handleChange("photo")}
            type="file"
            name="image"
            accept="image/png, image/jpeg"
          />
        </Form.Group>{" "}
      </div>{" "}
    </>
  );
};

export default PersonalInfo;
