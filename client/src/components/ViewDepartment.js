import React from 'react';
import { Header, Table, Button, Icon } from 'semantic-ui-react';
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
  delete = (itemID) => {
    Axios.delete(`/api/departments/${this.props.match.params.id}/items/${itemID}`)
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
              <Table.HeaderCell># in stock</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.items.map( item =>
              <Table.Row key={item.id}>
                    <Table.Cell>
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                          {item.name}
                        </div>
                        <div>
                          <Button icon color="green" as={Link} to={`/departments/${this.props.match.params.id}/items/${item.id}`}><Icon name="pencil"/></Button>
                          <Button icon color="red" onClick={() => this.delete(item.id)}><Icon name="trash"/></Button>
                        </div>
                      </div>
                    </Table.Cell>
                <Table.Cell>${item.price.toFixed(2)}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.number_in_stock}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        < Button color="blue" as={Link} to={`/departments/${this.props.match.params.id}/items`}>Add to Inventory</Button>
      </div>
    )
  }
}
export default ViewDepartment;


