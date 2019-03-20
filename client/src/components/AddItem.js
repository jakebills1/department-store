import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';
class AddItem extends React.Component {
  initialState = { name: "", price: undefined, description: "", number_in_stock: undefined, }
  state = {...this.initialState}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {...this.state};
    axios.post(`/api/departments/${this.props.match.params.id}/items`, newItem)
      .then(
        res => {
          this.props.history.push(`/departments/${this.props.match.params.id}`)
        }
      )
      .catch(
        err => {
          console.log(err)
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
            required
            onChange={this.handleChange}
            value={this.state.name}
            />
            <Form.Input
            name="price"
            label="Price"
            placeholder="Price of Item"
            required
            onChange={this.handleChange}
            value={this.state.price}
            type="number"
            />
            <Form.Input
            name="description"
            label="Description"
            placeholder="Description"
            required
            onChange={this.handleChange}
            value={this.state.description}
            />
            <Form.Input
            name="number_in_stock"
            label="Number in Stock"
            placeholder="Number in Stock"
            required
            onChange={this.handleChange}
            value={this.state.number_in_stock}
            type="number"
            />
          </Form.Group>
          <Form.Button>Add Item</Form.Button>
      </Form>
    )
  }
}
export default AddItem;