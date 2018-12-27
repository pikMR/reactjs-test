import React from 'react'
import Articulo from './../articulo/articulo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePageNosotros,updatePageArticulos } from './../../app/actions/Actions'

class MainContent extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <main className="twitter-panel">
      <Choose>
        <When condition={this.props.ruta ==='/visita'}>
          <div>
            <h1>Quienes somos</h1>
          </div>
        </When>
        <When condition={this.props.ruta ==='/productos'}>
          <div className="tweet-container-header">
            Articulos
          </div>
          <Articulo key="1" tweet={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
          <Articulo key="2" tweet={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}/>
          <Articulo key="3" tweet={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
          <Articulo key="4" tweet={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}/>
        </When>
      </Choose>
      </main>
    )
  }
}

MainContent.propTypes = {
  ruta: PropTypes.string
}

MainContent.defaultProps = {
  ruta: '/visita'
}

const mapStateToProps = (state,ownProps) =>
{
  console.log("_update_state :")
  console.dir(ownProps)
  return {
    ruta: state.pageReducer.ruta
  }
}

export default connect(mapStateToProps, { updatePageArticulos,updatePageNosotros })(MainContent);
