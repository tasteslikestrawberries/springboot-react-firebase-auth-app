import React from "react";
import { Form } from "react-bootstrap";

const WorkInfo = ({ handleChange }) => {
  return (
    <>
      <br />
      <div className="d-flex flex-column align-items-center">
        <h2>Work Info</h2>

        <Form.Group className="w-75 mt-4">
          <Form.Control
            required
            placeholder="Work Location"
            onChange={handleChange("worklocation")}
            name="worklocation"
          />
        </Form.Group>

        <Form.Group className="w-75 mt-4">
          <Form.Control
            placeholder="Department"
            onChange={handleChange("department")}
            name="department"
          />
        </Form.Group>

        <Form.Group className="w-75 mt-4">
          <Form.Control
            placeholder="Employment Date"
            onChange={handleChange("employmentdate")}
            name="employmentdate"
          />
        </Form.Group>
      </div>
    </>
  );
};

export default WorkInfo;
