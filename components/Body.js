import React from 'react'
import Navigation from './navigation/navigation'
import MainContent from './maincontent/maincontent'
import SearchContent from './searchcontent/searchcontent'

class Body extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div id="dashboard">
       <div className="container-fluid">
         <div className="row">
           <div className="hidden-xs col-sm-4 col-md-push-1 col-md-3 col-lg-push-1 col-lg-3" >
             <Navigation />
           </div>
           <div className="col-xs-12 col-sm-8 col-md-push-1 col-md-7 col-lg-push-1 col-lg-6">
             <MainContent />
           </div>
           <div className="hidden-xs hidden-sm hidden-md col-lg-push-1 col-lg-3">
             <SearchContent />
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default Body
