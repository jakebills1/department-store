import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const Department = ({ name, id }) => (
  <div style={styles.container}>
    <Header as="h3">{name}</Header>
    <Button as={Link} to={`/departments/${id}`} color="green">View Department</Button>
  </div>
)
const styles = {
  container: {
    display: "flex",
  }
}
export default Department;
