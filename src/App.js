import React,{useContext} from 'react'
import Header from './Header'
import CountryDetails from './Pages/CountryDetails';
import Countries from './Pages/Contries';
import {Switch,Route} from 'react-router-dom'
import {Context} from './Context'

function App() {
  const {isDark} = useContext(Context)
  return(
    <div className={isDark?'containerDark':'container'}>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Countries/>
        </Route>
        <Route path="/:countryId">
          <CountryDetails/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
