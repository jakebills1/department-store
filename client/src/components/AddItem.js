import React from 'react';
import { Form } from 'semantic-ui-react';
// import axios from 'axios';
class AddItem extends React.Component {
  initialState = { name: "", price: undefined, description: ""}
  state = {...this.initialState}
  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value, })
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newDep = {...this.state};
  //   axios.post("/api/departments", newDep)
  //     .then(
  //       res => {
  //         this.props.add({...res.data})
  //       }
  //     )
  //   this.setState({...this.initialState})
  // }

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
            <Form.Input
            name="price"
            label="Price"
            placeholder="Price of Item"
            onChange={this.handleChange}
            value={this.state.name}
            />
            <Form.Input
            name="description"
            label="Description"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.name}
            />
          </Form.Group>
          <Form.Button>Add Item</Form.Button>
      </Form>
    )
  }
}
export default AddItem;