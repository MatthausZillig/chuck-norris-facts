import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './category-item.styles.scss'
import { setJokes } from '../../redux/jokes/jokes.actions'

const CategoryItem = props => {
  const handleClick = () => {
    const { setJokes } = props
    setJokes(props.category)
    props.history.push(`${props.match.url}${props.category}`)
  }
  return (
    <div className="category-item" onClick={handleClick}>
      <h2 className="category-item__value">{`#${props.category}`}</h2>
    </div>
  )
}

const withRouterCategoryItem = withRouter(CategoryItem)

const mapDispatchToProps = dispatch => ({
  setJokes: data => dispatch(setJokes(data))
})

export default connect(null, mapDispatchToProps)(withRouterCategoryItem)
