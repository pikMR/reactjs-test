import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from 'reactjs-popup'

const CardContacto = ({ title }) => (
  <div className="card">
    <div className="header">{title} </div>
    <div className="content">
      Lorem ipsum dolor 0091625545478 amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod C\Espino , 40005 Sub.dolor cupiditate. Murcia.
    </div>
  </div>
)

const CardMap = ({ title }) => (
  <div className="card">
    <div className="header">{title} </div>
    <div className="content">
      Lorem ipsum dolor 0091625545478 amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod C\Espino , 40005 Sub.dolor cupiditate. Murcia.
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.4555688587167!2d-1.1268109237948725!3d37.957935556065465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6378b05d5981a1%3A0xf6d7745b8045fde4!2sIndustrias+Metal%C3%BArgicas+de+Pati%C5%84o!5e0!3m2!1ses!2ses!4v1547072802862" width="600" height="450" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
)
const stylemap = {
  width:"auto"
}

class Contacto extends React.Component{

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

    <Popup
      trigger={ <a className="profile-name" href="javascript:void(0)" target="_self"> Contactar </a> }
      position="right center"
      on="hover"
    >
      <CardContacto title="Contactar" />
    </Popup>

    <Popup
      trigger={ <a href="javascript:void(0)" target="_self"> Localización </a> }
      position="right center"
      contentStyle={stylemap}
      on="hover"
    >
      <CardMap title="Localización" />
    </Popup>
  </div>
  <div className="profile-resumen">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-3 pl-2">
          <Link to={"/"}>
            <p className="profile-resumen-title">TWITTER</p>
            <p className="profile-resumen-value"><FontAwesomeIcon icon={['fab', 'twitter']} /></p>
          </Link>
        </div>
        <div className="col-xs-4 pl-2">
          <Link to={"/following"}>
            <p className="profile-resumen-title">FACEBOOK</p>
            <p className="profile-resumen-value"><FontAwesomeIcon icon={['fab', 'facebook']} /></p>
          </Link>
        </div>
        <div className="col-xs-5 pl-2">
          <Link to={"/followers"}>
            <p className="profile-resumen-title">YOUTUBE</p>
            <p className="profile-resumen-value"><FontAwesomeIcon icon={['fab', 'youtube']} /></p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</aside>
    )
  }

}
export default Contacto
