import React from 'react';
import axios from 'axios';
class ViewItem extends React.Component {
  state = { reviews: [], item: {} }
  componentDidMount() {
    axios.get(`/api/items/${this.props.match.params.item_id}/reviews`)
    .then( res => this.setState({ reviews: res.data, }))
    axios.get(`/api/departments/${this.props.match.params.id}/items/${this.props.match.params.item_id}`)
    .then( res => this.setState({ item: res.data}))
  }
  render() {
    return (
      <h1>{this.state.item.name}</h1>
    )
  }
}
export default ViewItem;