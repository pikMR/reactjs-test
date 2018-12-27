import React from 'react'
import {Link} from 'react-router'
import {NavLink} from 'react-router-dom'
import { updatePageNosotros,updatePageArticulos } from './../../app/actions/Actions'
import { connect } from 'react-redux'

const FilterLink = ({dispatch,filter,children})=>(
<Link
  onClick={()=>dispatch()}
  to={filter}
  activeStyle={{
    textDecoration: 'none',
    color: 'red'
  }}>
  {children}
</Link>
)

const refCallback = () => {
  console.log("_node : " + node);
}


const mapStateToProps = (state) =>
{
  return {
    ruta: state.pageReducer.ruta
  }
}

export default connect(mapStateToProps, { updatePageArticulos,updatePageNosotros })(FilterLink);
