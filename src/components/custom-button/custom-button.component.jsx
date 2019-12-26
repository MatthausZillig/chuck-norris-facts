import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isMoreJokes }) => (
  <button className={`${isMoreJokes ? 'more-jokes' : ''} custom-button`}>{children}</button>
)

export default CustomButton
