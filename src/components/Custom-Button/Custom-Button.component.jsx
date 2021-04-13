import React from "react";
import './Custom-Button.styles.scss'

const CustomButton = ({ type, children }) => {
 return(
    <button ClassName="custom-button" type={type}>
      {children}
    </button>
  )
 }

export default CustomButton;
