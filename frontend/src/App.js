import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Game from './components/Game'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/game" component={Game}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </main>
    )
  }
}
    


ReactDOM.render(
  <App />,
  document.getElementById('root')
)