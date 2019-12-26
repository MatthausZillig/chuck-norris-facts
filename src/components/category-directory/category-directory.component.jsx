/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import CategoryItem from '../../components/category-item/category-item.component'
import axios from 'axios'
import './category-directory.styles.scss'

class CategoryDirectory extends Component {
  constructor() {
    super()

    this.state = {
      categories: []
    }

    this.getJokeCategories = this.getJokeCategories.bind(this)
  }

  getJokeCategories() {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        this.setState({ categories: response.data.value })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then(response => {
        this.setState({ categories: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { categories } = this.state
    return (
      <div className="category-directory">
        {categories.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))}
      </div>
    )
  }
}

export default CategoryDirectory
