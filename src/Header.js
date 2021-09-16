import React, {useContext} from 'react'
import "./index.css"
import {Context} from './Context'
import light from './brightness (1).png'
import dark from './dark-mode (2).png'

function Header(){
    const {handleDark,isDark} = useContext(Context)
    return (
        <nav className={isDark?'navDark':'navLight'}>
            <h1>Where is the world?</h1>
        {isDark?<img src={light} className="toggle"onClick={handleDark}/>:
        <img src={dark} className="toggle"onClick={handleDark}/> }
        </nav>
    )
}

export default Header
