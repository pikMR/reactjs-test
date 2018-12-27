import React from 'react'
import { Link } from 'react-router';

class Navigation extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <aside id="profile" className="twitter-panel">
  <div className="profile-banner">
    <Link to={"/"}
    className="profile-name"/>
  </div>
  <div className="profile-body">
    <img className="profile-avatar"/>
    <Link to={"/"}
      className="profile-name">
      _nombreDePerfil
    </Link>
    <Link to={"/"}
      className="profile-username">
      _userName
    </Link>
  </div>
  <div className="profile-resumen">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-3">
          <Link to={"/"}>
            <p className="profile-resumen-title">TWEETS</p>
            <p className="profile-resumen-value">
              90</p>
          </Link>
        </div>
        <div className="col-xs-4">
          <Link to={"/following"}>
            <p className="profile-resumen-title">SIGUIENDO</p>
            <p className="profile-resumen-value">
              40</p>
          </Link>
        </div>
        <div className="col-xs-5">
          <Link to={"/followers"}>
            <p className="profile-resumen-title">SEGUIDORES</p>
            <p className="profile-resumen-value">
              20</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</aside>
    )
  }

}
export default Navigation
