import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import Loading from './components/loading/loading.component'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import CategoryContextProvider from './contexts/categoryContext'

library.add(faArrowLeft)
const Category = React.lazy(() => import('./pages/category/category.component'))
const Joke = React.lazy(() => import('./pages/joke/joke.component'))

function App() {
  return (
    <CategoryContextProvider>
      <main>
        <Suspense fallback={<Loading />}>
          <Header />
          <Switch>
            <Route exact path="/" component={Category} />
            <Route exact path="/*" component={Joke} />
          </Switch>
        </Suspense>
      </main>
    </CategoryContextProvider>
  )
}

export default App
