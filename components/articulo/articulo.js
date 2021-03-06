import React from 'react'
import { Link } from 'react-router';
import Global from '../../helpers/constantes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Articulo extends React.Component{

  constructor(props){
    super(props)
  }
  render(){
    return(
      <article  className="tweet detail">
        <div className="tweet-body">
          <h1>{this.props.titulo}</h1>
          <p className="tweet-message">{this.props.descripcion}</p>
          <If condition={ this.props.imagen != undefined }>
            <img className="tweet-img" src={Global.FOLDER_UPLOAD + this.props.imagen}/>
          </If>
          <div className="tweet-footer">
            <If condition={ this.props.pie1 != undefined }>
            <a className='like-icon liked' href='#'>
              <FontAwesomeIcon icon="info-circle" /> {this.props.pie1}
            </a>
            </If>
            <If condition={ this.props.pie2 != undefined }>
              <a className="reply-icon" href='#'>
                <FontAwesomeIcon icon="share" />{this.props.pie2}
              </a>
            </If>
          </div>
        </div>
        <div id="tweet-detail-99"/>
      </article>
    )
  }
}
export default Articulo
