import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
class AddDepartment extends React.Component {
  initialState = { name: "", }
  state = {...this.initialState}
  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newDep = {...this.state};
    axios.post("/api/departments", newDep)
      .then(
        res => {
          this.props.add({...res.data})
        }
      )
    this.setState({...this.initialState})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            name="name"
            label="Name"
            placeholder="Name of Department"
            onChange={this.handleChange}
            value={this.state.name}
            />
            <Form.Button>Add Department</Form.Button>
          </Form.Group>
      </Form>
    )
  }
}
export default AddDepartment;