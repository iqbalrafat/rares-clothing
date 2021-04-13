import React from 'react'
import './Form-Input.styles.scss'

function FormInput({name,type,onChange,value,required,label}){
return(
  <div className="group">
  <input className="form-input"
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      required={required}
      />
    {
      label ?(
        <label className={`${value.length ? 'shrink': ' '} form-label`}>
           {label}
        </label>
       ):null
    }
  </div>
 )
}

export default FormInput;