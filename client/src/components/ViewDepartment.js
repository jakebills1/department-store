import React from 'react';
import { Header, Table, Button } from 'semantic-ui-react';
import Axios from 'axios';
import { Link, } from 'react-router-dom';
class ViewDepartment extends React.Component {
  state = { department: {}, items: [], }
  componentDidMount() {
    Axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data})
      })
    Axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then( res => {
        this.setState({ items: res.data})
      })
  }
  render(){
    return (
      <div>
        <Header as="h1">{this.state.department.name}</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item Name</Table.HeaderCell>
              <Table.HeaderCell>Item Price</Table.HeaderCell>
              <Table.HeaderCell>Item Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.items.map( item =>
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>${item.price.toFixed(2)}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        < Button color="blue" as={Link} to="/departments/:id/items">Add to Inventory</Button>
      </div>
    )
  }
}
export default ViewDepartment;