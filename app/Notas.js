import React from 'react'

class Notas extends React.Component{

  constructor(){
    super();
    this.state = {
      nombres:[]
    }
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
    fetch('notes',{method:'GET'}).then(results => results.json())
    .then(data =>
        this.setState({
          nombres:
            data.map((x) => ({
              nombre: x.nombre
            }))
         })
       )
      .catch(err=>{console.log("--error--"+err)});
  }

  render(){
    return (
        <If condition={this.state.nombres}>
              <ul>
              <For each="item" index='index' of={ this.state.nombres }>
                <li key={index}>{item.nombre}</li>
              </For>
              </ul>
        </If>
    )
  }
}

export default Notas
