import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountriesContainer = () => {

    // need to fetch countries as JSON format e.g name.common, flag, population
    // display the countries as a list
    // add a button or a checklist to mark the country as visited
    // onClick to move the country from countriesList to visitedCountriesList

    const [countries, setCountries] = useState(null);
    const [checkedList, setCheckedList] = useState([]);


    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    },[])

    const countriesList = countries ? countries.map((country, index) => <Country key={index} country={country}/>) : <p>Loading countries!</p>

    // handles the change in state of false to true when checkbox is clicked (toggle function)
    // make event handler for check box here

    const handleCheckedbox = ((country) => {
        // filter through countries
        // where isChecked == true
        // append to visited list
        const value = country.target.value;
        const isChecked = country.target.checked;
        if(!isChecked){
            //Add checked item into checkList
            console.log("checked")
            setCheckedList([...checkedList, value]);
        } else {
            //Remove unchecked item from checkList
            console.log("not checked");
            const filteredList = checkedList.filter((e) => e !== value);
            setCheckedList(filteredList);
        }
        
    })
    
    return(
    
        <div className="container">
            <div className="countries_container">
                <h3>Countries I still need to visit:</h3>
                {countriesList}
            </div>
            <div className="visited_container">
                <h3>Countries I have visited:</h3>
                {/* {checkedList} */}
            </div>
            
        </div>
    
    );

}

export default CountriesContainer;