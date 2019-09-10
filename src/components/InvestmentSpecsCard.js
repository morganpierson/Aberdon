import React, {useState} from 'react';
import Select from 'react-select';
import {navigate} from '@reach/router'
import SelectSection from './SelectSection';


const InvestmentSpecsCard = () => {
  const stateOptions = [
    {value: "Arizona", label: 'Arizona'}, 
    {value: "California", label: 'California'}, {value: "Colorado", label: 'Colorado'}]

  const propertyOptions = [
    {value: "Apartments", label: "Apartments"},
    {value: "Mixed-use", label: "Mixed-use"},
    {value: "Office", label: "Office"}
  
  ]
  const [selectedState, setSelectedState] = useState({value: "Arizona", label: 'Arizona'})
  const [propertyType, setPropertyType] = useState({value: "Apartments", label: "Apartments"})

  return (
    <form 
    className='card-container'
    onSubmit={(event) => {
      event.preventDefault();
      navigate('/results')
    }}
    >
    <h3 className='sub-text'>Find your next investment.</h3>
     <SelectSection 
        options={stateOptions}
        value={selectedState}
        onChange={(value) => setSelectedState(value)}
        title={"State"}
      />
      <SelectSection 
        options={propertyOptions}
        value={propertyType}
        onChange={(value) => setPropertyType(value)}
        title={"Property Type"}
      />
    
    <button className='search-button'>Search</button>
    </form>
  )
}

export default InvestmentSpecsCard