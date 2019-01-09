import React from 'react'
import { Link ,NavLink} from 'react-router'
import FilterLink from './FilterLink'
import { MainContent } from '../maincontent/maincontent'
import { connect } from 'react-redux'
import { updatePageNosotros,updatePageArticulos,updatePageSearchContent } from './../../app/actions/Actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextSearch from '../textsearch/TextSearch'

class Header extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    let bannerStyle = {backgroundImage: 'url(public/resources/img/4.png)'}
    return(
      <div id="user-page" className="app-container">
        <header className="user-header">
          <div className="user-banner" style={bannerStyle}>
          </div>
          <div className="user-summary">
            <div className="container-fluid">
              <div className="row">
                <div className="hidden-xs col-sm-4 col-md-push-1 col-md-3 col-lg-push-1 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-8 col-md-push-1 col-md-7 col-lg-push-1 col-lg-9">
                  <ul className="user-summary-menu d-flex">
                    <li className="p-2">
                    <FilterLink filter="productos" dispatch={this.props.updatePageArticulos}>
                    Productos
                    </FilterLink>
                    </li>
                    <li className="p-2">
                    <FilterLink filter="visita" dispatch={this.props.updatePageNosotros}>
                    Visita
                    </FilterLink>
                    </li>
                    <li className="followers ml-auto p-2">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-xs"><FontAwesomeIcon icon="search" /></span>
                        </div>
                        <TextSearch type="text" className="form-control" placeholder="Busca Algo">
                        </TextSearch>
                    </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="hidden-xs col-sm-4 col-md-push-1 col-md-3 col-lg-push-1 col-lg-3" >
              <aside id="user-info">
                <div className="user-avatar">
                </div>
              </aside>
            </div>
            <If condition={this.props.busqueda && (this.props.busqueda.length>0)}>
            <div className="col-xs-12 col-sm-8 col-md-7 col-md-push-1 col-lg-7">
              {'Te interesa la categoría '}<a href="#">{this.props.busqueda[0].intereses}</a>{"?"}
            </div>
            </If>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
  return {
    ruta: state.pageReducer.ruta,
    busqueda: state.pageReducer.busqueda
  }
}
//export default Header
export default connect(mapStateToProps, { updatePageArticulos,updatePageNosotros,updatePageSearchContent })(Header);
