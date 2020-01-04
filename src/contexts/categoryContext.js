import React, { createContext, Component } from 'react'
import api from '../services/api'

export const CategoryContext = createContext()

class CategoryContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    api
      .get('/categories')
      .then(response => {
        this.setState({ data: response.data }, console.log(this.state.data))
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <CategoryContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CategoryContext.Provider>
    )
  }
}

export default CategoryContextProvider
