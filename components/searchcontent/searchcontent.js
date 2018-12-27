import React from 'react'

class SearchContent extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <aside id="suggestedUsers" className="twitter-panel">
        <span className="su-title">A quién seguir</span>

            <div className="sg-item" key="1">
              <div className="su-avatar">
                <img src="public/resources/img/Deculture-Ghibli-Twitter-Avatar-11-e1315619036589.png" alt="Juan manuel"/>
              </div>
              <div className="sg-body">
                <div>
                  <a href={"/"}>
                    <span className="sg-name">Juan</span>
                    <span className="sg-username">Manuel</span>
                  </a>
                </div>
                <a href={"/"}
                  className="btn btn-primary btn-sm">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                      Ver perfil</a>
              </div>
            </div>

            <div className="sg-item" key="2">
              <div className="su-avatar">
                <img src="public/resources/img/Deculture-Ghibli-Twitter-Avatar-11-e1315619036589.png" alt="Juan Miguel"/>
              </div>
              <div className="sg-body">
                <div>
                  <a href={"/"}>
                    <span className="sg-name">Miguel</span>
                    <span className="sg-username">Espinoza</span>
                  </a>
                </div>
                <a href={"/"}
                  className="btn btn-primary btn-sm">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                      Ver perfil</a>
              </div>
            </div>
      </aside>
    )
  }

}
export default SearchContent
