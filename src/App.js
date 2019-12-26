import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Category from './pages/category/category.component'
import Joke from './pages/joke/joke.component'
import Header from './components/header/header.component'
import './App.css'

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Category} />
        <Route exact path="/*" component={Joke} />
      </Switch>
    </main>
  )
}

export default App
