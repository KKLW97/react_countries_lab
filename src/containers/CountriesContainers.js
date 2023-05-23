import { useEffect, useState } from "react";
import Country from "../components/Country";
import VisitedCountryList from "../components/VisitedCountryList";


const CountriesContainer = () => {

    // need to fetch countries as JSON format e.g name.common, flag, population
    // display the countries as a list
    // add a button or a checklist to mark the country as visited
    // onClick to move the country from countriesList to visitedCountriesList
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const jsonData = await response.json();
            setCountries(jsonData);
        }  
        fetchCountries();
    },[])

    const visitCountry = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }

    // handles the change in state of false to true when checkbox is clicked (toggle function)
    const handleCheckedbox = ((country) => {
        //    const isChecked = event.target.checked;
        // const visitedCountry = country.target.checked
        if(visitedCountries){
            setVisitedCountries([...visitedCountries, (country)]);
        }else{
            const newVisitedCountriesList = visitedCountries.filter(country => visitedCountries !== visitedCountries);
            setVisitedCountries(newVisitedCountriesList)
        }
    })

    // const handleCheckedbox = (event) => {
    //     let updatedList = [...visitedCountries]
    //     if(event.target.checked){
    //         updatedList = [...visitedCountries, event.target.value]
    //     }else{
    //         updatedList.splice(visitedCountries.indexOf(event.target.value),1)
    //     }
    //     setVisitedCountries(updatedList);
    // }

    const countriesList = countries ? countries.map((country, index) => <Country key={index} country={country} visitCountry={visitCountry} handleCheckedbox={handleCheckedbox}/>) : <p>Loading countries!</p>
    const visitedCountriesList = visitedCountries.map((country) => <Country country={country}/>)
    // const visitedCountriesList = visitedCountries.map((country) => <ul><Country country={country}/></ul>)

    return(
    
        <div className="list-container">
            <div className="countries-container"> 
                <h3>Countries I still need to visit:</h3>
                {countriesList}
            </div>
            <div>
                <h3>Countries visited:</h3>
                {visitedCountriesList}
                {/* <VisitedCountryList visitedCountries={visitedCountries}/> */}
            </div>
            
        </div>
    );
}

export default CountriesContainer;