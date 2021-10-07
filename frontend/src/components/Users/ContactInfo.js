import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Contact Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          required
          type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
          onChange={handleChange("phone")}
          name="phone"
        />
      </Form.Group>

      <Form.Group className="w-75 mt-4">
        <Form.Control
          required
          placeholder="City"
          onChange={handleChange("city")}
          name="city"
        />
      </Form.Group>

      <Form.Group className="w-75 mt-4">
        <Form.Control
          required
          placeholder="Address"
          onChange={handleChange("address")}
          name="address"
        />
      </Form.Group>

    </div>
  );
};

export default ContactInfo;