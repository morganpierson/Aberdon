import React from 'react';
import Select from 'react-select'

const SelectSection = ({title, options, value, onChange}) => {
  return (
    <div className='card-section'>
      <h2 className='card-section-header'>{title}</h2>
      <Select 
      options={options}
      value={value}
      onChange={onChange}
      className='select-dropdown'
      />
    </div>
  )
}

export default SelectSection