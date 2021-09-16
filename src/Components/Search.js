import React,{useContext} from 'react'
import { Context } from '../Context'
import logo from './magnify.png'

function Search(){

    const {handleSearch, isDark} = useContext(Context)
    return(
        <form>
            <input className={isDark?'inputDark':'inputLight'}
            type="text" 
            placeholder={'e.g. Romania'}
             onChange={(e)=>handleSearch(e)}
             />
             <img className='loop' src={logo}/>
        </form>
    )
}

export default Search