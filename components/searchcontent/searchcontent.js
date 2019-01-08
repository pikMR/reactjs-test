import React from 'react'
import Global from '../../helpers/constantes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updatePageSearchContent } from './../../app/actions/Actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SearchContent extends React.Component{

  constructor(){
    super()
    this.state = {
      articulos:[]
    }
  }

  componentDidMount(){
    this.getItems();
  }

  componentWillMount(){
    console.log(" -- componentWillMount --")
  }

  getItems(){
    fetch('notes',{method:'GET'}).then(results => results.json())
    .then(data =>
        this.setState({
          articulos:
            data.map((x) => ({
              nombre: x.nombre,
              intereses: x.intereses,
              imagen: x.imagen
            }))
         })
       )
      .catch(err=>{console.log("--error--"+err)});
  }

  render(){
    return(
      <aside id="suggestedUsers" className="twitter-panel">
        <span className="su-title">Destacados</span>
        <If condition={this.state.articulos}>
              <ul>
              <For each="item" index='index' of={ (this.props.busqueda!=null && this.props.busqueda.length > 0) ? this.props.busqueda : this.state.articulos }>
                <li key={index+"_"+item.nombre}>{item.nombre}</li>
                <div className="sg-item">
                  <div className="su-avatar">
                    <img src={Global.FOLDER_UPLOAD + item.imagen}/>
                  </div>
                  <div className="sg-body">
                    <div>
                      <a href={"/"}>
                        <span className="sg-name">{item.nombre}</span>
                        <span className="sg-username">{item.intereses}</span>
                      </a>
                    </div>
                    <a href={"/"}
                      className="btn btn-primary btn-sm">
                      <FontAwesomeIcon icon="book" />
                          {' - '}Detalles</a>
                  </div>
                </div>
              </For>
              </ul>
        </If>
      </aside>
    )
  }
}

SearchContent.defaultProps = {
  busqueda: null
}
const mapStateToProps = (state,ownProps) =>
{
  return {
    busqueda: state.pageReducer.busqueda
  }
}

export default connect(mapStateToProps, { updatePageSearchContent })(SearchContent);
