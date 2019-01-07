import React from 'react'
import MainContent from './../maincontent/maincontent'

class Articulos extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 no-padding-right">
          <MainContent homeDropdown={true}/>
        </div>
      </div>
      )}
}

export default Articulos;
