import React from 'react';
import { Form, Button, } from 'semantic-ui-react';
import axios from 'axios';
class EditDepartment extends React.Component {
  state = { department: {}, }
  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ department: res.data})
    })
  }
  handleChange = (e) => {
    this.setState({ department: {
      name: e.target.value, 
    } })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {...this.state.department};
    axios.put(`/api/departments/${this.props.match.params.id}`, data)
    .then( res => {
      this.props.history.push("/departments")
    })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          label="Name"
          placeholder="Name"
          value={this.state.department.name}
          onChange={this.handleChange}
        />
        <Button>Submit</Button>
      </Form>
    )
  }
}
export default EditDepartment;