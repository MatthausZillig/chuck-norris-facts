import React, { createContext, Component } from 'react'
import axios from 'axios'

export const CategoryContext = createContext()

class CategoryContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.chucknorris.io/jokes/categories')
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
