import { React, useState, useEffect } from "react";

import axios from "../../axiosCommonInstance";

//styles
import { Table } from "react-bootstrap";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/getAll")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Table className="table" size="sm" bordered striped hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>City</th>
            <th>Address</th>
            <th>Employment Date</th>
            <th>Work Location</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.name}</td>
              <td>{users.surname}</td>
              <td>{users.birthdate}</td>
              <td>{users.gender}</td>
              <td>{users.phone}</td>
              <td>{users.city}</td>
              <td>{users.address}</td>
              <td>{users.employmentdate}</td>
              <td>{users.worklocation}</td>
              <td>{users.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UsersTable;
