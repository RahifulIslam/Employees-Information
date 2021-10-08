import React, { useContext } from "react";
import { Button,Table } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';

const Home = () => {
    const [users, setUser] = useContext(UserContext);
    console.log(users);
    return (
<div>
 <Button variant="primary">Create Employee</Button>{' '}
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>Notice Id</th>
      <th>Name</th>
      <th>Status</th>
      <th>Out Time</th>
      <th>In Time</th>
      <th>Purpose</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Rahiful</td>
      <td>Lunch</td>
      <td>1.00 pm</td>
      <td>2.00 pm</td>
      <td>for lunch</td>
    </tr>
  </tbody>
</Table>
</div>
    );
};

export default Home;