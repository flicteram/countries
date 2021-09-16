import React, {useEffect,useState,createContext} from 'react'

const Context = createContext()

function ContextProvider({children}){
    const [country,setCountry]=useState([])
    const [region,setRegion]=useState('')
    const [search,setSearch]=useState('')
    const [isDark,setIsDark] = useState(false)

    function handleDark(){
        setIsDark(!isDark)
    }

    const handleSelect=(e)=>{setRegion(e.target.value)}
    const handleSearch=(e)=>{setSearch(e.target.value)}


    useEffect(()=>{
        if(search.length===0){
        fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag;numericCode;nativeName;subregion;currencies;languages;topLevelDomain;borders')
        .then(response=>response.json())
        .then(data=>setCountry(data))
        }
        else if(country.map(item=>item.name.toLowerCase()).includes(search.toLowerCase())){
        fetch(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(response=>response.json())
        .then(data=>setCountry(data)) 
        }
        else{
        fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag;numericCode;nativeName;subregion;currencies;languages;topLevelDomain;borders')
        .then(response=>response.json())
        .then(data=>setCountry(data))
        }
        
    },[search])

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(response=>response.json())
        .then(data=>setCountry(data))
    },[region])



    return (
        <Context.Provider value={{country,isDark,handleSelect,handleSearch,handleDark}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}