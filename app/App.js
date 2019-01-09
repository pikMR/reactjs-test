import React from 'react'
import { render } from 'react-dom'
import Header from '../components/header/header'
import MainContent from '../components/maincontent/maincontent'
import Articulos from '../components/articulos/articulos'
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import MueblesApp from '../components/MueblesApp'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faShare,faInfoCircle,faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faBook,faShare,faInfoCircle,faSearch,faFacebook,faTwitter,faYoutube)

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

console.log("env => ", process.env.NODE_ENV);

export const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)


class App extends React.Component{
  render(){
    return (
      <Provider store={ store }>
      <Router history={ browserHistory }>
      <Route path="/" component={MueblesApp}>
        <Route path="/(:filter)" component={Header} >
        </Route>
      </Route>
      </Router>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById('root'));
