import React, {useContext} from 'react'
import {Context} from '../Context'
import Country from '../Components/Country'
import Select from '../Components/Select'
import Search from '../Components/Search'
import {Link} from 'react-router-dom'

function Countries(){
    const {country} = useContext(Context)
    
    const displayCountry = Object.values(country).map((item,index)=>
    <Link to={`/${item.numericCode}` } key={index}><Country 
    flag={item.flag}
    population={item.population.toLocaleString('en-US')} 
    region={item.region} 
    capital={item.capital} 
    name={item.name}
    alt={`${item.name} flag`}/>
    </Link>)
    return (
        <div className="firstPageContainer">
            <div className='searchSelect'>
        <Search/>
        <Select/>
            </div>
        <div className="countriesFlex">
        {displayCountry}
        </div>
        </div>
    )
}


export default Countries