import React from 'react'
import { withRouter } from 'react-router-dom'
import './category-item.styles.scss'

const CategoryItem = ({ category, history, match }) => {
  return (
    <div className="category-item" onClick={() => history.push(`${match.url}${category}`)}>
      <h2 className="category-item__value">{`#${category}`}</h2>
    </div>
  )
}

export default withRouter(CategoryItem)
