import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountriesContainer = () => {

    // need to fetch countries as JSON format e.g name.common, flag, population
    // display the countries as a list
    // add a button or a checklist to mark the country as visited
    // onClick to move the country from countriesList to visitedCountriesList

    const [countries, setCountries] = useState(null);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    },[])

    const countriesList = countries ? countries.map((country) => <Country country={country}/>) : <p>Loading countries!</p>
    // make event handler for check box here

    const handleCheckedbox = (() => {
        // filter through countries
        // where isChecked == true
        // append to visited list
        // const countriesVisited = countriesList.filter(country.checkboxComponent.isChecked == true)

        
    })

    return(
        <>
            <h3>Countries I still need to visit:</h3>
            {countriesList}
        </>
    );

}

export default CountriesContainer;