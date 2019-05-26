import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ onClick, children, disabled, secondary, type }) => {

  const className = 'c-Button'

  const activeClassNames = [
    className,
    disabled ? `${className}--disabled` : '',
    secondary ? `${className}--secondary` : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      disabled={disabled}
      tabIndex={0}
      onClick={onClick}
      type={type}
      className={activeClassNames}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Component takes a child node */ 
  children: PropTypes.node.isRequired,
  /** If you should apply disabled style */
  disabled: PropTypes.bool.isRequired,
  /** If you should apply secondary styles */ 
  secondary: PropTypes.bool.isRequired,
  /** function to be triggered onClick */
  onClick: PropTypes.func.isRequired,
  /** Type of button to use 'button', 'submit' or 'reset' */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  children: null,
  disabled: false,
  secondary: false,
  onClick: () =>{},
  type: 'button',
}

export default Button