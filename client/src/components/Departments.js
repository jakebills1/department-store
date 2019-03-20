import React from 'react';
import axios from 'axios';
import Department from './Department'
import AddDepartment from './AddDepartment';
import { Button, Icon, } from 'semantic-ui-react';
class Departments extends React.Component {
  state = { departments: [], addDep: false,  }
  componentDidMount(){
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, })
      })
  }
  add = (dep) => {
    const { departments, } = this.state;
    this.setState({ departments: [dep, ...departments], addDep: false})
  }
  delete = (depID) => {
    axios.delete(`/api/departments/${depID}`)
      .then( res => {
        console.log(res)
      })
    const departments = this.state.departments.filter( dep => dep.id !== depID )
    this.setState({ departments, })
  }
  toggle = () => this.setState({ addDep: !this.state.addDep})
  renderDeps = () => this.state.departments.map( dep => <Department key={dep.id} {...dep} deleteDep={this.delete}/>)
  render(){
    return (
      <div>
        {this.state.addDep ? <AddDepartment add={this.add}/> 
        :
        <Button icon color="blue" onClick={this.toggle}><Icon name="plus"/></Button>}
        {this.renderDeps()}
      </div>
    )
  }
}
export default Departments;
