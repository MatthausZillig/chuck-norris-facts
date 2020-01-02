/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import CategoryItem from '../../components/category-item/category-item.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { CategoryContext } from '../../contexts/categoryContext'
import './category-directory.styles.scss'

class CategoryDirectory extends Component {
  constructor() {
    super()

    this.state = {
      seeMore: false
    }
    this.seeMore = this.seeMore.bind(this)
  }

  seeMore() {
    this.setState({ seeMore: !this.state.seeMore })
  }
  static contextType = CategoryContext
  render() {
    const { data } = this.context
    return (
      <>
        <div
          className={`category-directory ${this.state.seeMore ? 'category-directory_seeMore' : ''}`}
        >
          {data.map((item, index) => (
            <CategoryItem key={index} category={item} />
          ))}
        </div>
        <CustomButton isMobile onClick={this.seeMore}>{`${
          this.state.seeMore ? 'SEE LESS' : 'SEE ALL'
        }`}</CustomButton>
      </>
    )
  }
}

export default CategoryDirectory
