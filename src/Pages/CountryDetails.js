import React,{useContext} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import { Context } from '../Context'


function CountryDetails(props){
    const history=useHistory()
    const {country, isDark} = useContext(Context)
    const {countryId} = useParams()
    const thisCountry = country.find(country=>country.numericCode===countryId)
    const handleBack=()=>history.push('/')

    return (
        <div className="singleCountry">
            <div className="flag">
            <button className={isDark?'buttonDark':'buttonLight'} onClick={handleBack}>Back</button>
            <img src={thisCountry.flag} alt={thisCountry.name+" flag"}/>
            </div>

            <div className='detailsFull'>
                
            <div className="details1">
            <h2>{thisCountry.name}</h2>
            <p><strong>Native Name</strong>: {thisCountry.nativeName}</p>
            <p><strong>Population</strong>: {thisCountry.population.toLocaleString('en-US')}</p>
            <p><strong>Region</strong>: {thisCountry.region}</p>
            <p><strong>Sub Region</strong>: {thisCountry.subregion}</p>
            <p><strong>Capital</strong>: {thisCountry.capital}</p>
            </div>
           
            <div className="details2">
            <p><strong>Top Level Domain</strong>: {thisCountry.topLevelDomain}</p>
            <p><strong>Currencies</strong>: {thisCountry.currencies.map(item=>item.name)}</p>
            {thisCountry.languages.length===1? <p><strong>Language</strong>: {thisCountry.languages.map(item=>item.name).join(',')}</p>:
            <p><strong>Languages</strong>: {thisCountry.languages.map(item=>item.name).join(', ')}</p>}
            </div>

            </div>           

            
            <div className='borderCountry'>
            <h4>Border Countries:</h4>
            {thisCountry.borders.length===0?<h4>None</h4>:
            thisCountry.borders.map((item,index)=><p key={index}>{item}</p>)}
            </div>

        </div>
        
        
    )
}

export default CountryDetails