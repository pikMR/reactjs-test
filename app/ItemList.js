import React from 'react'
import PropTypes from 'prop-types'

class ItemList extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <li>{this.props.product.name} - {this.props.product.price}</li>
    )
  }
}


ItemList.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

ItemList.defaultProps = {
  productPrice: 0
}

export default ItemList
