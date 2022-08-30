import { useState } from 'react'
import './form.css'

const Form = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputprops } = props

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputprops.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default Form
