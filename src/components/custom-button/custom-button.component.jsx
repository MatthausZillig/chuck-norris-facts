import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isMoreJokes, ...otherProps }) => (
  <button className={`${isMoreJokes ? 'more-jokes' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
