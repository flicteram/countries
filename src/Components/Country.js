import React, {useContext} from 'react'
import {Context} from '../Context'

function Country({flag,name,population,region,capital,alt}){
    const {isDark} = useContext(Context)
return (
    <div className={isDark?"countriesDark":'countries'} >
            <img src={flag} alt={alt}/>
        <div className={isDark?"countriesInfoDark":'countriesInfo'}>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    </div>
)
}

export default Country
