/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import CategoryItem from '../../components/category-item/category-item.component'
import { CategoryContext } from '../../contexts/categoryContext'
import './category-directory.styles.scss'

class CategoryDirectory extends Component {
  constructor() {
    super()

    this.state = {
      categories: []
    }
  }

  static contextType = CategoryContext
  render() {
    const { categories } = this.state
    console.log(this.context)
    const { data } = this.context
    return (
      <div className="category-directory">
        {data.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))}
      </div>
    )
  }
}

export default CategoryDirectory
