import React from 'react'
import Body from './Body'
import Header from './header/header'

class MueblesApp extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="mainApp">
        <Header></Header>
          <div className="tweet-detail">
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          </div>
        <Body />
      </div>
    )
  }
}

export default MueblesApp
