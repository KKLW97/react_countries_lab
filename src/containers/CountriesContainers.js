import { useEffect, useState } from "react";

const CountriesContainer = () => {

    // need to fetch countries as JSON format e.g name.common, flag, population
    // display the countries as a list
    // add a button or a checklist to mark the country as visited
    // onClick to move the country from countriesList to visitedCountriesList

    const [country, setCountry] = useState(null);

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountry(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    },[])

    return(
        <>
            <p>Hello from CountriesContainer!</p>
        </>
    );

}

export default CountriesContainer;