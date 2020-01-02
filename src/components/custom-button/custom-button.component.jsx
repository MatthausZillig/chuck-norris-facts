import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isMoreJokes, isMobile, ...otherProps }) => (
  <button
    className={`${isMoreJokes ? 'more-jokes' : ''}${isMobile ? 'isMobile' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
