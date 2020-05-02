import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/main.scss'

import Nav from './components/Nav'
import Home from './components/Home'
import Game from './components/Game'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      
        <BrowserRouter>
        <Nav />
        <main className="page-container">
        <div className="content-wrap">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/game" component={Game}/>
          </Switch>
        </div>
        
        <Footer />
        </main>
        </BrowserRouter>
      
    )
  }
}
    


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )