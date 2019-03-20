import React from 'react';
import { Header, Button, Segment } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import styled from 'styled-components';
const Department = ({ name, id, deleteDep }) => (
  <MainWrapper>
    <Segment as={Transparent}>
      <Heading size="large">{name}</Heading>
      <SecondWrapper>
        <Button as={Link} to={`/departments/${id}`} color="green">View Department</Button>
        <Button color="blue" as={Link} to={`/departments/${id}/edit`}>Edit Department</Button>
        <Button color="red" onClick={() => deleteDep(id)}>Remove Department</Button>
      </SecondWrapper>
    </Segment>
  </MainWrapper>
)

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const SecondWrapper = styled.div`
  display: flex;
`
const Heading = styled.h1`
  font-size: ${props => fontSize(props.size)}
`
const Transparent = styled.div`
  background: transparent !important;
  color: white;
`
const fontSize = (size) => {
  switch (size) {
    case "large":
      return "40px";
    case "medium":
      return "30px";
    default:
      return "25px";
  }
}
  
export default Department;
