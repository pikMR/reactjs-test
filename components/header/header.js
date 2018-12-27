import React from 'react'
import { Link ,NavLink} from 'react-router'
import FilterLink from './FilterLink'
import { MainContent } from '../maincontent/maincontent'
import { connect } from 'react-redux'
import { updatePageNosotros,updatePageArticulos } from './../../app/actions/Actions'
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
                <div className="col-xs-12 col-sm-8 col-md-push-1 col-md-7 col-lg-push-1 col-lg-7">
                  <ul className="user-summary-menu">
                    <li>
                    <FilterLink filter="productos" dispatch={this.props.updatePageArticulos}>
                    Productos
                    </FilterLink>
                    </li>
                    <li>
                    <FilterLink filter="visita" dispatch={this.props.updatePageNosotros}>
                    Visita
                    </FilterLink>
                    </li>
                    <li className="followers">
                      <Link to="/">
                        <p className="summary-label">Busqueda</p>
                        <p className="summary-value">70</p>
                      </Link>
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
            <div className="col-xs-12 col-sm-8 col-md-7 col-md-push-1 col-lg-7">
              this.props.children
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>
{
  return {
    ruta: state.pageReducer.ruta
  }
}
//export default Header
export default connect(mapStateToProps, { updatePageArticulos,updatePageNosotros })(Header);
