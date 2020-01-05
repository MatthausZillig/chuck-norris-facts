/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { connect } from 'react-redux'
import CategoryItem from '../../components/category-item/category-item.component'

import './category-directory.styles.scss'

const CategoryDirectory = ({
  categoryJokes: {
    categoryJokes: { categoryJokes }
  }
}) => {
  if (!categoryJokes) {
    return null
  }
  return (
    <div className="category-directory">
      {categoryJokes.map((item, index) => (
        <CategoryItem key={index} category={item} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  categoryJokes: state.categoriesReducer
})
export default connect(mapStateToProps)(CategoryDirectory)
