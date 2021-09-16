import React,{useContext} from 'react'
import { Context } from '../Context'

function Select(){
    const {handleSelect} = useContext(Context)
    return(
        <select onChange={e=>handleSelect(e)}>
            <option value="" hidden>Filter by Region</option>
            <option value='asia'>Asia</option>
            <option value='africa'>Africa</option>
            <option value='europe'>Europe</option>
            <option value='americas'>America</option>
            <option value='oceania'>Oceania</option>
        </select>
    )
}
export default Select