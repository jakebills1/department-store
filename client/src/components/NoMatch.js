import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const NoMatch = () => (
  <div style={styles.container}>
    <Header as="h1">404: Page Not Found</Header>
    <Link to="/"><Button color="blue">Back</Button></Link>
  </div>
)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  }
}
export default NoMatch;
