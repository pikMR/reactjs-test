import React from 'react'
import { Link } from 'react-router';

class Articulo extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <article  className="tweet detail">
        <img className="tweet-avatar" src="public/resources/img/Bvro1LrCUAA6RZq.jpg" />
        <div className="tweet-body">
          <div className="tweet-user">
            <Link to="/">
              <span  className="tweet-name" data-ignore-onclick>
                TWITTER_NAME
              </span>
            </Link>
            <span className="tweet-username">
              TWITTER_USERNAR
            </span>
          </div>
          <p className="tweet-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className="tweet-img" src="public/resources/img/Bvro1LrCUAA6RZq.jpg"/>
          <div className="tweet-footer">
            <a className='like-icon liked'>
              <i className="fa fa-heart " aria-hidden="true" data-ignore-onclick></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </a>
              <a className="reply-icon">
                <i className="fa fa-reply " aria-hidden="true" data-ignore-onclick></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo
              </a>
          </div>
        </div>
        <div id="tweet-detail-99"/>
      </article>
    )
  }
}
export default Articulo
