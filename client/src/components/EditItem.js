import React from 'react';
import { Form, } from 'semantic-ui-react';
import axios from 'axios';
class EditItem extends React.Component {
  state = { name: "", price: undefined, description: "", number_in_stock: undefined, }
  componentDidMount() {
    const { id, item_id, } = this.props.match.params;
    axios.get(`/api/departments/${id}/items/${item_id}`)
      .then( res => {
        this.setState({ ...res.data, })
      })
  }
  handleChange = (e) => {
    const { target: { name, value}, } = e;
    this.setState({ [name]: value,  
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {...this.state};
    const { id, item_id, } = this.props.match.params;
    axios.put(`/api/departments/${id}/items/${item_id}`, data)
      .then( res => {
        console.log(res)
        this.props.history.push(`/departments/${id}`)
      })
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
          step="any"
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
        <Form.Button>Update Item</Form.Button>
      </Form>
    )
  }
}
export default EditItem;