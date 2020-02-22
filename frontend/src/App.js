import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}
    


ReactDOM.render(
  <App />,
  document.getElementById('root')
)