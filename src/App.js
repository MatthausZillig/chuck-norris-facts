import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import Loading from './components/loading/loading.component'
import { setJoke } from './redux/jokes/jokes.actions'
import axios from 'axios'
import './App.css'

const Category = React.lazy(() => import('./pages/category/category.component'))
const Joke = React.lazy(() => import('./pages/joke/joke.component'))

class App extends React.Component {
  componentDidMount() {
    const { setJoke } = this.props

    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then(response => {
        setJoke({ categoryJokes: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <main>
        <Suspense fallback={<Loading />}>
          <Header />
          <Switch>
            <Route exact path="/" component={Category} />
            <Route exact path="/*" component={Joke} />
          </Switch>
        </Suspense>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setJoke: data => dispatch(setJoke(data))
})

export default connect(null, mapDispatchToProps)(App)
