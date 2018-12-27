import React from 'react'

class Form extends React.Component{

  constructor(){
    super(...arguments)
    this.state = {
      firstName: '',
      lastName: '',
      age: ''
    }
  }

  handleChanges(e){
    let newState = Object.assign(this.state,{[e.target.id]:e.target.id === "age" ? (+e.target.value+1) : e.target.value})
    this.setState(newState)
  }

  saveEmployee(e){
    this.props.save(this.state)
  }

    componentDidMount(){
      console.log(this.refs.lastName.id)
      this.refs.lastName.focus()
    }

  render(){
    return(
      <form>
    <label htmlFor='firstName'>Nombre</label>
    <input ref='firstName' id='firstName'
      type='text' value={this.state.firstName} onChange={this.handleChanges.bind(this)}/>
    <br/>
    <label htmlFor='lastName'>Apellido</label>
    <input ref='lastName' id='lastName' type='text' value={this.state.lastName} onChange={this.handleChanges.bind(this)}/>
    <br/>
    <label htmlFor='age'>Edad</label>
    <input id='age' type='number' value={this.state.age} onChange={this.handleChanges.bind(this)}/>
    <br/>
    <button onClick={this.saveEmployee.bind(this)}>Guardar</button>
  </form>
    )
  }
}

export default Form
